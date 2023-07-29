import { Clientes } from "../Models/clientes.js";

const getClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll();    
        res.status(200).json(clientes);    
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const postClientes = async (req, res) => {
    const {cedulacliente, nomcliente, dircliente,
        telcliente, correocliente} = req.body;
    try {
        const newCliente = await Clientes.create({
            cedulacliente,
            nomcliente,
            dircliente,
            telcliente,
            correocliente
        });
        res.status(200).json({newCliente});

    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const putClientes = async (req, res) => {
    const { cedulacliente } = req.params;
    const {nomcliente, dircliente,
        telcliente, correocliente} = req.body;
    try {
        const oldcliente = await Clientes.findByPk(cedulacliente);
        oldcliente.nomcliente= nomcliente;
        oldcliente.dircliente= dircliente;
        oldcliente.telcliente= telcliente;
        oldcliente.correocliente= correocliente
        const modcliente= await oldcliente.save();  
        res.status(200).json({modcliente});      
    } catch (error) {
        res.status(400).json({ mensaje: error });
        
    }
}

const deleteClientes = async (req, res) => {
    
    const { cedulacliente } = req.params;
    try {
        const respuesta = await Clientes.destroy({
        where: {
            cedulacliente,
        },
    });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};

//Busca el correo de un cliente con la cedulacliente
const getCorreoCliente = async (req, res) => {
    const { cedulacliente } = req.params;

    try {
        const cliente = await Clientes.findByPk(cedulacliente);
        if (cliente) {
            const correocliente = cliente.correocliente;
            res.status(200).json({ correocliente });
        } else {
            res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

export{
    getClientes,
    postClientes,
    putClientes,
    deleteClientes,
    getCorreoCliente
}