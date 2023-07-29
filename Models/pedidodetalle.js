import { DataTypes} from 'sequelize';
import { sequelize } from '../Database/database.js';
import { Pedidos } from './pedidos.js'; 
import { Productos } from './productos.js';

const PedidoDetalle = sequelize.define('pedidodetalle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idpedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idproducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    }, 
    {
    timestamps: false
    }
    );

  // Configura las relaciones entre PedidoDetalle, Pedidos y Productos (belongsTo)
PedidoDetalle.belongsTo(Pedidos, { foreignKey: 'idpedido' });
PedidoDetalle.belongsTo(Productos, { foreignKey: 'idproducto' });

export {
    PedidoDetalle
}