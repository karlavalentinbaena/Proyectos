const express = require("express");
const cors = require("cors");
const ConectarMongoDb= require("./bd");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión con la  base de datos, (nombre y coleccion)
const db = new ConectarMongoDb("nosql", "usuarios");

app.post("/login", async (req, res) => {
    await db.connect();
    const { usuario, contrasena } = req.body;

    const user = await db.findOne({ usuario: usuario, contrasena: contrasena });

    if (user) {
        res.send("Registro correcto");
    } else {
        res.send("Los datos están incorrectos.");
    }
});

//Probar crear un usuario y contraseña 
/* app.get("/insertar", async (req, res) => {
    try {
        await db.connect();
        await db.col.insertOne({ usuario: "karla", contrasena: "Prueba1997$" });
        res.send("Usuario de prueba insertado.");
    } catch (error) {
        console.error("Error al insertar:", error);
        res.status(500).send("Error al insertar.");
    }
});
*/

app.listen(3000, () => {
    console.log("El servidor esta funcionando en el puerto 3000");
});









