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
    document.getElementById("respuesta").textContent = text;
}

});
