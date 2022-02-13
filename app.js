const mongose = require("./conexion");
require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const cors = require('cors') PROYECTOS INDEPENDIENTES
const PORT = 5000;
const app = express();
app.use(express.json());


//Routes
const user = require('./routes/user.routes');
const filterCategories = require('./routes/filterCategories.routes');
const filterLabels = require('./routes/filterLabels.routes');
const games = require('./routes/games.routes');
const ratings = require('./routes/ratings.routes');

//middlewares
app.use(cors());

//Use Routes
app.use('/user', user);
app.use('/filterCategories', filterCategories);
app.use('/filterLabels', filterLabels);
app.use('/games', games);
app.use('/ratings', ratings);

//servidor
app.listen(process.env.PORT || 5000,  () => {
    console.log(`Servidor corriendo en el puerto ` + process.env.PORT || 5000)
})
