const express = require ('express');
const app = express();

//Config
    //configuracion de puerto
app.set('port', process.env.PORT || 3000);

//Middlewares
    //le diremos a la app que se utilizará json y que lo lea
app.use(express.json());

//Routes (Urls)
    //utlilizaremos los datos de un archivo externo o en otra carpeta
app.use(require('./routes/employees'));

//Server
app.listen(app.get('port'), () => {
    console.log('Server in port', app.get('port'));
});