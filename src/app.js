import express from 'express';
import morgan from 'morgan';
import clientesRoutes from './routes/clientes.routes.js'
import categoriasRoutes from './routes/categorias.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/usuarios',usuariosRoutes);
app.use('/api/clientes',clientesRoutes);
app.use('/api/categorias',categoriasRoutes);

export default app;