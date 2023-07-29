import { Productos } from "../Models/productos.js";

const getProductos = async (req, res) => {
    try {
        const productos = await Productos.findAll();    
        res.status(200).json(productos);    
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const postProductos = async (req, res) => {
    const {nomproducto, categoriaproducto, descripcionproducto,
        precioproducto, stockproducto, imgproducto} = req.body;
    try {
        const newProducto = await Productos.create({
            nomproducto,
            categoriaproducto,
            descripcionproducto,
            precioproducto,
            stockproducto,
            imgproducto
        });
        res.status(200).json({newProducto});

    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const putProductos = async (req, res) => {
    const { idproducto } = req.params;
    const {nomproducto, categoriaproducto, descripcionproducto,
        precioproducto, stockproducto, imgproducto} = req.body;
    try {
        const oldProducto = await Productos.findByPk(idproducto);
        oldProducto.nomproducto= nomproducto;
        oldProducto.categoriaproducto= categoriaproducto;
        oldProducto.descripcionproducto= descripcionproducto;
        oldProducto.precioproducto= precioproducto;
        oldProducto.stockproducto= stockproducto;
        oldProducto.imgproducto= imgproducto;
        const modProducto= await oldProducto.save();  
        res.status(200).json({modProducto});      
    } catch (error) {
        res.status(400).json({ mensaje: error });
        
    }
}

const deleteProductos = async (req, res) => {
    
    const { idproducto } = req.params;
    try {
        const respuesta = await Productos.destroy({
        where: {
            idproducto,
        },
    });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};

const getStockProducto = async (req, res) => {
    const { idproducto } = req.params;

    try {
        const producto = await Productos.findByPk(idproducto);
        if (producto) {
            const stockproducto = producto.stockproducto;
            res.status(200).json({ stockproducto });
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

const putStockProductos = async (req, res) => {
    const { idproducto } = req.params;
    const { stockproducto } = req.body; // Solo obtenemos el valor del stockproducto del cuerpo de la solicitud

    try {
        const producto = await Productos.findByPk(idproducto);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        // Actualizamos solo la variable stockproducto
        producto.stockproducto = stockproducto;

        // Guardamos los cambios en la base de datos
        await producto.save();

        res.status(200).json({ mensaje: 'Producto actualizado exitosamente', producto });
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};


export{
    getProductos,
    postProductos,
    putProductos,
    deleteProductos,
    getStockProducto,
    putStockProductos
}


