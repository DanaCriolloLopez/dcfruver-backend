import { Pedidos } from "../Models/pedidos.js";


const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.findAll();    
        res.status(200).json(pedidos);    
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const postPedidos = async (req, res) => {
    const {idpedido, cedulacliente, fechapedido,
        total, estado} = req.body;
    try {
        const newpedido = await Pedidos.create({
            idpedido,
            cedulacliente,
            fechapedido,
            total,
            estado
        });
        res.status(200).json({newpedido});

    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const putPedidos = async (req, res) => {
    const { idpedido } = req.params;
    const { cedulacliente, fechapedido,
        total, estado, imgpedido} = req.body;
    try {
        const oldpedido = await Pedidos.findByPk(idpedido);
        oldpedido.idpedido= idpedido;
        oldpedido.cedulacliente= cedulacliente;
        oldpedido.fechapedido= fechapedido;
        oldpedido.total= total;
        oldpedido.estado= estado;
        const modpedido= await oldpedido.save();  
        res.status(200).json({modpedido});      
    } catch (error) {
        res.status(400).json({ mensaje: error });
        
    }
}

const deletePedidos = async (req, res) => {
    
    const { idpedido } = req.params;
    try {
        const respuesta = await Pedidos.destroy({
        where: {
            idpedido,
        },
    });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};

// Lista los pedidos que tengan como estado = 'P' (pendiente)
const getPedidosPendientes = async (req, res) => {
    try {
        const pedidos = await Pedidos.findAll({
            where: { estado: 'P' } // Filtrar por pedidos con estado 'P' (Pendiente)
        });

        res.status(200).json(pedidos);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

//Modifica el estado = 'P' (pendiente) a estado = 'C' (Confirmado)
const putEstadoPedido = async (req, res) => {
    const { idpedido } = req.params;

    try {
        // Buscar el pedido por su ID
        const pedido = await Pedidos.findByPk(idpedido);

        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }

        // Cambiar el estado del pedido a 'C' (Confirmado)
        pedido.estado = 'C';

        // Guardar los cambios en la base de datos
        await pedido.save();

        res.status(200).json({ mensaje: 'Estado del pedido confirmado', pedido });
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};



export{
    getPedidos,
    postPedidos,
    putPedidos,
    deletePedidos,
    getPedidosPendientes,
    putEstadoPedido
}


