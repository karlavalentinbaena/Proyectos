async function login() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // para que se interprete el usuario y contraseña como json
    try {
        usuario = JSON.parse(usuario);
        contrasena = JSON.parse(contrasena);
    } catch (e) {
        //y sino, se queda como un string
    }

    const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, contrasena })
    });

    const text = await res.text();
    const mensaje = document.getElementById("respuesta");
    mensaje.textContent = text;

    if (text.includes("correcto")) {
        mensaje.className = "mensaje deexito";
    } else {
        mensaje.className = "mensaje de error";
    }
}

//Para poder hacer el registro
function registrarse() {
    const usuario = document.getElementById("nuevoUsuario").value;
    const contrasena = document.getElementById("nuevaContrasena").value;
    const mensaje = document.getElementById("respuestaRegistro");

    fetch("http://localhost:3000/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, contrasena })
    })
    .then(response => response.text())
    .then(data => {
        mensaje.textContent = data;

        if (data.includes("exitoso")) {
            mensaje.className = "mensaje de exito";
        } else {
            mensaje.className = "mensaje de error";
        }
    })
    .catch(error => {
        mensaje.textContent = "Error en el registro";
        mensaje.className = "mensaje error";
        console.error("Error:", error);
    });
}
