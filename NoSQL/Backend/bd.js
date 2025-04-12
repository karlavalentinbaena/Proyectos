const { MongoClient } = require("mongodb");

//Iniciar la clase para conectar a MongoDB
class ConectarMongoDb {
    constructor(db, collection) {
        //el usuario y contraseña que se pidió con la url para conectar a mongo
        this.uri = "mongodb+srv://student:dPgF0sb0ADBUZHCI@clusterunam.6pxlppf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterUNAM";
        this.db = db;
        this.collection = collection;
        this.client = new MongoClient(this.uri);
    }

    async connect() {
        await this.client.connect();
        this.basedatos = this.client.db(this.db);
        this.col = this.basedatos.collection(this.collection);
    }

    async findOne(query) {
        return await this.col.findOne(query);
    }
}

module.exports = ConectarMongoDb;
