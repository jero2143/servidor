
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('Conexión a mongoDB correcta');
    } catch (error) {
        console.log(error);
        process.exit(1); //Detener app
    }

}

module.exports = conectarDB;
