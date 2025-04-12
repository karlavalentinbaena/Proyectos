document.getElementById('data').addEventListener('submit', (e) => {
    e.preventDefault();

    const data_body = {
        user: document.querySelector("#userName").value,
        password: document.querySelector("#userpwd").value
    };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(data_body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.mdb_data === null) {
            alert("Datos incorrectos");
        } else {
            alert("Datos correctos");
        }
    });
});
