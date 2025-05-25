# NoSQL Injection

Aplicación para simular la vulnerabilidad NoSQL vista en clase. 
1. Para hacer este ejercicio se utilizó  Node.js y Express con MongoDB para el backend.
2. En el caso del frontend se utilizó JavaScript y HTML. 

### Para que la aplicación funcione es necesario: 
1. Clonar el repositorio poniendo: git clone UrlDelRepositorio.
2. Tener instalado Node y un software que permita correr la app, en este caso yo usé Visual Studio.
3. Abrir el proyecto: cd NombreDelRepositorio.
4. instalar las dependencias: npm install.

### Para probarla: 
1. Abrir la ruta de donde se guardó el archivo server.js: cd RutaServer.js
2. Para que el servidor y la base funcione se debe poner: node server.js
3. Se debe de abrir el archivo de index.html en algun navegador.
4. Se puede hacer un registro con un usuario y contraseña que se escojan.
5. Despues, abajo aparece un formulario para poder inicsiar sesión con los datos qye ya se registraron.
6. Para probar el nosql injection, se puede poner en usuario y contraseña:
   1.  {"$ne": null}
   2.  {"$gt": ""}
Fueron los que probé y funcionó, porque debe de aparecer un mensaje como de resgitro correcto. 
