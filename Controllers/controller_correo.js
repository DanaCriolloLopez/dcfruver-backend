// Importar el módulo nodemailer para enviar correos electrónicos
import nodeMailer from 'nodemailer';

// Función para enviar un correo electrónico
const envioCorreo = async (req, res) => {
    try {
        // Obtener el cuerpo de la solicitud (datos del correo a enviar)
        const body = req.body;
        // Configurar el servicio de transporte para enviar el correo
        const config = await nodeMailer.createTransport({
            host: 'smtp.office365.com',
            port: 587, // Corregido 'post' por 'port'
            auth: {
                user: 'dcfruverSAS3@hotmail.com',
                pass: 'd_cf1234'
            }
        });
        // Configurar las opciones del correo
        const opciones = {
            from: 'Programación',
            subject: body.asunto, 
            to: body.email,
            text: body.mensaje
        };
         // Enviar el correo usando la configuración y opciones definidas
        config.sendMail(opciones, function (error, result) {
            if (error) return res.json({ ok: false, msg: error }); 
            return res.json({ 
                ok: true,
                msg: result
            });
        })
    } catch (error) {
        res.status(400).json({ mensaje: error.message }); 
    }
}

export {
    envioCorreo
}
