// Importa la clase Sequelize del paquete 'sequelize'
import { Sequelize } from "sequelize";
// Crea una nueva instancia de Sequelize y conecta a la base de datos
// 'dcfruver' con el usuario 'root' y contraseña vacía (''), utilizando el
// dialecto 'mysql' para la conexión con la base de datos.
const sequelize = new Sequelize('dcfruver', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export {
    sequelize 
}