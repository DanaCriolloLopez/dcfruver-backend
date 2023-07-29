import { DataTypes} from 'sequelize';
import { sequelize } from '../Database/database.js';

const Clientes = sequelize.define('clientes', {
    cedulacliente: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false
    },
    nomcliente: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    dircliente: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telcliente: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    correocliente: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
    }, 
    {
        tableName: 'clientes' ,
        timestamps: false
    }
    );

export {
    Clientes
}