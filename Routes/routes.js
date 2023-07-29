import Router from 'express';
import { getUsuario } from '../Controllers/controller_table_usuario.js';

const router= Router();

// GET method route
router.get('/', (req, res) => {
    res.send('GET página principal express taller backend');
});

export default router;