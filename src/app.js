import express from 'express';
import morgan from 'morgan';
import clientesRoutes from './routes/clientes.routes.js'
import categoriasRoutes from './routes/categorias.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'
import pedidosRoutes from './routes/pedidos.routes.js'
import detallePedidoRoutes from './routes/detallePedido.routes.js'
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/usuarios',usuariosRoutes);
app.use('/api/clientes',clientesRoutes);
app.use('/api/categorias',categoriasRoutes);
app.use('/api/productos',productosRoutes);
app.use('/api/pedidos',pedidosRoutes);
app.use('/api/detallePedidos',detallePedidoRoutes);

export default app;