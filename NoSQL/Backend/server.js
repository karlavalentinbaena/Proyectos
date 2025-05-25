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
    const { usuario, contrasena } = req.body;

    // vulnerabilidad no sql
    const user = await db.findOne({ usuario: usuario, contrasena: contrasena });

    if (user) {
        res.send("Registro correcto");
    } else {
        res.send("Los datos están incorrectos.");
    }
});

app.get("/insertar", async (req, res) => {
    try {
        await db.connect();
        await db.col.insertOne({ usuario: "karla", contrasena: "Prueba1997$" });
        res.send("Usuario de prueba insertado.");
    } catch (error) {
        console.error("Error al insertar:", error);
        res.status(500).send("Error al insertar.");
    }
});

app.get("/test", async (req, res) => {
    try {
        await db.connect();
        const docs = await db.col.find({}).limit(5).toArray();
        res.json(docs);
    } catch (error) {
        console.error("Error al consultar:", error);
        res.status(500).send("Error al conectar o leer la colección");
    }
});

app.listen(3000, () => {
    console.log("El servidor esta funcionando en el puerto 3000");
});









