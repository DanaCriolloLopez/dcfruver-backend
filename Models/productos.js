import { DataTypes} from 'sequelize';
import { sequelize } from '../Database/database.js';


const Productos = sequelize.define('productos', {
    idproducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomproducto: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoriaproducto: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcionproducto: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    precioproducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stockproducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgproducto: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    }
    }, 
    {
        tableName: 'productos' ,
        timestamps: false
    }
        );

export {
    Productos
}
