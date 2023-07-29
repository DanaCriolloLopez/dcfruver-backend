import { Usuario } from "../Models/usuario.js";

const getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findAll();    
        res.status(200).json(usuario);    
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
} 

const getCredencialesUsuario = async (req, res) => {
    try {
        // Especifica los atributos que deseas recuperar de la base de datos
        const credenciales = await Usuario.findAll({
            attributes: ['nombreusu', 'contrasenausu']
        });

        // Devuelve solo los atributos 'nombreusu' y 'contrasenausu' en la respuesta
        res.status(200).json(credenciales);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

const postUsuario = async (req, res) => {
    const {nombreusu, contrasenausu, rol} = req.body;
    try {
        const newUsuario = await Usuario.create({
            nombreusu,
            contrasenausu,
            rol
        });
        res.status(200).json({newUsuario});

    } catch (error) {
        res.status(400).json({mensaje: error});
    }
}

const putUsuario = async (req, res) => {
    const { idusuario } = req.params;
    const {nombreusu, contrasenausu, rol} = req.body;
    try {
        const oldUsuario = await Usuario.findByPk(idusuario);
        oldUsuario.nombreusu= nombreusu;
        oldUsuario.contrasenausu= contrasenausu;
        oldUsuario.rol= rol;
        const modUsuario= await oldUsuario.save();  
        res.status(200).json({modUsuario});      
    } catch (error) {
        res.status(400).json({ mensaje: error });
        
    }
}

const deleteUsuario = async (req, res) => {
    const { idusuario } = req.params;
    try {
        const respuesta = await Usuario.destroy({
        where: {
            idusuario,
        },
    });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};



export{
    getUsuario,
    getCredencialesUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}