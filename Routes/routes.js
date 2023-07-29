import Router from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario, getCredencialesUsuario } from '../Controllers/controller_table_usuario.js';

const router= Router();

// GET method route
router.get('/', (req, res) => {
    res.send('GET página principal express taller backend');
});

//rutas para la consultas de la tabla usuario
router.get('/usuario', getUsuario);
router.post('/usuario', postUsuario);
router.put('/usuario/:idusuario', putUsuario);
router.delete('/usuario/:idusuario', deleteUsuario);
router.get('/usuarioc', getCredencialesUsuario);

export default router;
