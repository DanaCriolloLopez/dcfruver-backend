import express from 'express';
import router from './Routes/routes.js';
import { sequelize } from "./Database/database.js";

//Creo una instancia de express
const app = express();

//Para aceptar solicitudes con formato json
app.use(express.json());

//Montar enrutador en app principal
app.use(router);

//Crear una variable port con el valor 3000
app.set('port',3000);

//Test a Base de datos
const testsDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión realizada con éxito");
        //inicia el servicio por el puerto determindado  
        app.listen(app.get('port'),() => {
            console.log(`Servidor escuchando por el puerto ${(app.get('port'))}`);
        });
    } catch (error) {
        console.log(`Error al realizar conexión ${error}`);
    }
    
}

testsDB();