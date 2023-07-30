import { PedidoDetalle } from "../Models/pedidodetalle.js";

const getPedidoDetalle = async (req, res) => {
    try {
        const pedidoDetalle = await PedidoDetalle.findAll();    
        res.status(200).json(pedidoDetalle);    
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const postPedidoDetalle = async (req, res) => {
    const {idpedido, idproducto, cantidad,
        subtotal} = req.body;
    try {
        const newpedidodetalle = await PedidoDetalle.create({
            idpedido,
            idproducto,
            cantidad,
            subtotal
        });
        res.status(200).json({newpedidodetalle});

    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const putPedidoDetalle = async (req, res) => {
    const { id } = req.params;
    const { idpedido, idproducto, cantidad,
        subtotal} = req.body;
    try {
        const oldpedido = await PedidoDetalle.findByPk(id);
        oldpedido.idpedido= idpedido;
        oldpedido.idproducto= idproducto;
        oldpedido.cantidad= cantidad;
        oldpedido.subtotal= subtotal;
        const modpedido= await oldpedido.save();  
        res.status(200).json({modpedido});      
    } catch (error) {
        res.status(400).json({ mensaje: error });
        
    }
}

const deletePedidoDetalle = async (req, res) => {
    
    const { id } = req.params;
    try {
        const respuesta = await PedidoDetalle.destroy({
        where: {
            id,
        },
    });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};

export{
    getPedidoDetalle,
    postPedidoDetalle,
    putPedidoDetalle,
    deletePedidoDetalle
}


