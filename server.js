import { sequelize } from "./Database/database.js";

//Test a Base de datos
const testsDB = async () => {
    try {
        // Sincroniza los modelos con la base de datos
        await sequelize.sync();
    
        console.log('Modelos sincronizados correctamente con la base de datos.');
    } catch (error) {
        console.error('Error al sincronizar modelos con la base de datos:', error);
    }
    
}

testsDB();