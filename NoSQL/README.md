# NoSQL Injection

Aplicación para simular la vulnerabilidad NoSQL, se utilizó MongoDB, express, thunder client, 

1. Se debe de descargar Node.js y todos los archivos que aparecen aquí (index.html, app.js, bd.js y server.js) al igual que vsc.
2. Después, desde la terminal instalar mongodb, express por si aun no se tiene, con los comandos de npm install mongodb y luego npm install express. 
3. Seguido de eso, se abre vsc y desde ahí se puede abrir la carpeta que tiene todos los archivos .js y .html, se abre la consola desde la parte de arriba en la sección de 'view' y luego en 'terminal'. Ahí se tiene que estar en la carpeta  'back', sino estamos ahí, poniendo: cd back nos localizamos y luego escribimos node server.js y aparecerá un mensaje "el servidor esta funcionando en el puerto 3000".
4. Luego de eso, le podemos dar clic al archivo index.html para ir al formulario, podemos ingresar cualquier usuario y contraseña y va a aparecer un mensaje diciendo que "las credenciales no son validas", pero si queremos hacer una vulneración, podemos ir a visual con la extensión de thunder clien la descargamos en vsc y después le damos en "new request", después en en vez de get lo cambiamos por POST y pegamos la url del dervidor que es: http://localhost:3000/login le damos en send y nos va a aparecer como un error, entonces lo que podemos hacer es poner en la seccion de 'body' y json: {"usuario": { "$ne": null }, "contrasena": { "$ne": null }} y lo que mostrará será que ahora las credenciales son validas. 
