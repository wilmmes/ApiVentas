import app from './app.js'
import sequelize from './database/database.js';
import 'dotenv/config'
import logger from './logs/logger.js';
async function main() {
    await sequelize.sync({force: false});
    const port = process.env.PORT;
    app.listen(port);  
    console.log('el puerto esta siendoe escuchado en ',port);
    logger.info(`server iniciado en puerto ${port}`);
    logger.warn(`server iniciado en puerto ${port}`);
    logger.error(`server iniciado en puerto ${port}`);
    logger.fatal(`server iniciado en puerto ${port}`);
}
main();