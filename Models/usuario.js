import { DataTypes} from 'sequelize';
import { sequelize } from '../Database/database.js';


const Usuario = sequelize.define('usuario', {
  // Model attributes are defined here
    idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreusu: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contrasenausu: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
    }, 
    {
    tableName: 'usuario' ,
    timestamps: false
    }
        );

export {
    Usuario
}
