import Router from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario, getCredencialesUsuario } from '../Controllers/controller_table_usuario.js';
import { getProductos, postProductos, putProductos, deleteProductos, getStockProducto, putStockProductos, getProducto} from '../Controllers/controller_table_productos.js';
import { getClientes, postClientes, putClientes, deleteClientes, getCorreoCliente } from '../Controllers/controller_table_clientes.js';
import { getPedidos, postPedidos, putPedidos, deletePedidos, getPedidosPendientes, putEstadoPedido, putEstadoRechazar } from '../Controllers/controller_table_pedidos.js';
import { getPedidoDetalle, postPedidoDetalle, putPedidoDetalle, deletePedidoDetalle, getPedidoDetalleId } from '../Controllers/controller_table_pedidodetalle.js';
import { envioCorreo } from '../Controllers/controller_correo.js';

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
router.get('/productos/:idproducto', getProducto);
router.post('/productos', postProductos);
router.put('/productos/:idproducto', putProductos);
router.delete('/productos/:idproducto', deleteProductos);
router.get('/productoss/:idproducto', getStockProducto);
router.put('/productoss/:idproducto', putStockProductos);

//rutas para las consultas de la tabla clientes

router.get('/clientes', getClientes);
router.post('/clientes', postClientes);
router.put('/clientes/:cedulacliente', putClientes);
router.delete('/clientes/:cedulacliente', deleteClientes);
router.get('/clientess/:cedulacliente', getCorreoCliente);

//rutas para las consultas de la tabla pedidos

router.get('/pedidos', getPedidos);
router.post('/pedidos', postPedidos);
router.put('/pedidos/:idpedido',putPedidos);
router.delete('/pedidos/:idpedido', deletePedidos);
router.get('/pedidoss',getPedidosPendientes);
router.get('/pedidoss/:idpedido', putEstadoPedido);
router.get('/pedidosss/:idpedido', putEstadoRechazar);

//rutas para las consultas de la tabla pedidodetalle

router.get('/pedidodetalle', getPedidoDetalle);
router.get('/pedidodetalle/:id', getPedidoDetalleId);
router.post('/pedidodetalle', postPedidoDetalle);
router.put('/pedidodetalle/:id', putPedidoDetalle);
router.delete('/pedidodetalle/:id', deletePedidoDetalle);

router.post('/envio', envioCorreo);

export default router;
