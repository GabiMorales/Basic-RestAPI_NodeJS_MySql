const express = require('express');
const router = express.Router();

//Llama a caracteristicas de clase database 
const mysqlConnection = require('../database');

//funcion listar
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//funcion buscar por id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err,
         rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


//funcion agregar
router.post('/', (req, res) => {
    const { id, name, salary } = req.body;
    const query = `
        CALL employeeAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Employeed Saved'})
        } else {
            console.log(err);
        }
    })
});

//Funcion editar
router.put('/:id', (req, res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = 'CALL employeeAddOrEdit(?,?,?)';
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Employee Updated'});
        } else {
            console.log(err);
        }
    });
});

//funcion eliminar
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Employee Deleted'});
        } else {
            console.log(err);
        }
    })
})

module.exports = router;