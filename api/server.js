// server.js
const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.use('/users', require('./routes/users'))


app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
