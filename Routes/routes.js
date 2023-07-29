import Router from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario, getCredencialesUsuario } from '../Controllers/controller_table_usuario.js';
import { getProductos, postProductos, putProductos, deleteProductos, getStockProducto, putStockProductos} from '../Controllers/controller_table_productos.js';
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

//rutas para las consultas de la tabla productos

router.get('/productos', getProductos);
router.post('/productos', postProductos);
router.put('/productos/:idproducto', putProductos);
router.delete('/productos/:idproducto', deleteProductos);
router.get('/productoss/:idproducto', getStockProducto);
router.put('/productoss/:idproducto', putStockProductos);

export default router;
