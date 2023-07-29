import { DataTypes} from 'sequelize';
import { sequelize } from '../Database/database.js';
import { Clientes } from './clientes.js';

const Pedidos = sequelize.define('pedidos', {
    idpedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cedulacliente: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    fechapedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(1),
        allowNull: false
    }
    }, 
    {
        tableName: 'pedidos' ,
        timestamps: false
    }
    );

// Configura la relación entre Pedidos y Clientes (belongsTo)
Pedidos.belongsTo(Clientes, { foreignKey: 'cedulacliente' });

export {
    Pedidos
}