const express = require("express");
const cors = require("cors");
const ConectarMongoDb= require("./bd");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión con  base de datos
const db = new ConectarMongoDb("nosql", "usuarios");

app.post("/login", async (req, res) => {
    await db.connect();
    const usuarios = await db.col.find().toArray();
    console.log("Usuarios en la BD:", usuarios);
   // const { usuario, contrasena } = req.body;
    //console.log("Consulta recibida en el servidor:", { usuario, contrasena });

    const user = await db.findOne({ usuario, contrasena });

    if (user) {
        res.send("Registro correcto");
    } else {
        res.send("Las credenciales están mal.");
    }
});


app.listen(3000, () => {
    console.log("El servidor esta funcionando en el puerto 3000");
});
