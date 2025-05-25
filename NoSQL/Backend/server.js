const express = require("express");
const cors = require("cors");
const ConectarMongoDb= require("./bd");

const app = express();
app.use(cors());
app.use(express.json());

// // Conexión con la  base de datos, (nombre y coleccion)
const db = new ConectarMongoDb("nosql", "usuarios");

//para iniciar sesion 
app.post("/login", async (req, res) => {
    await db.connect();
    const { usuario, contrasena } = req.body;

    const user = await db.findOne({ usuario: usuario, contrasena: contrasena });

    if (user) {
        res.send("Sesion iniciada correctamente.");
    } else {
        res.send("Los datos están mal.");
    }
});
//para registrar 
app.post("/registro", async (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).send("Faltan datos.");
    }
    try {
        await db.connect();
        const existe = await db.col.findOne({ usuario });

        if (existe) {
            return res.status(409).send("El usuario ya existe.");
        }

        await db.col.insertOne({ usuario, contrasena });
        res.send("Registro exitoso.");
    } catch (error) {
        console.error("Error al registrar:", error);
        res.status(500).send("Error del servidor.");
    }
});

app.listen(3000, () => {
    console.log("El servidor funciona en el puerto 3000");
});














