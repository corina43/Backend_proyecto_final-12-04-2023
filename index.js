const express = require('express');
// const cors = require('cors')
const { sequelize } = require('./models/index');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Asegúrate de agregar esta línea
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/auth', AuthRoutes);


const db = require('./db.js');
require('dotenv').config()
const router = require('./router')

const PORT = process.env.PORT;

// app.use(cors())
app.use(express.json());
app.use(router)

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
.catch((error) => console.log(error.message));
