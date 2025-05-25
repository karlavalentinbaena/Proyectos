async function login() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Intenta interpretar los campos como JSON
    try {
        usuario = JSON.parse(usuario);
        contrasena = JSON.parse(contrasena);
    } catch (e) {
        // Si no es JSON válido, se mantiene como string normal
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
