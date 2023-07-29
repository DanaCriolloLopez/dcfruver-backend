import { sequelize } from "./Database/database.js";

//Test a Base de datos
const testsDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión realizada con éxito");
    } catch (error) {
        console.log(`Error al realizar conexión ${error}`);
    }
    
}

testsDB();