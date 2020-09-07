const globalVars = require('../.env')


exports.insert = (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = `mongodb+srv://${globalVars.cluster_name}:${globalVars.password}@${globalVars.cluster_address}/${globalVars.db_name}?retryWrites=true&w=majority`;

    MongoClient.connect(url, function(err, db) { // Faz conexão com o banco de dados
        if (err) throw err;
        var databaseObject = db.db(globalVars.db_name); // Seleciona o banco de dados
        var myObject = req.body; // Extrai o JSON recebido

        databaseObject.collection(globalVars.collection_name).insertOne(myObject, function(err, res) { // insere o JSON no Bando de Dados
            if (err) throw err;
            console.log("Inserção feita com sucesso!");
        });

        db.close();
        });
    res.send("Inserção feita com sucesso!");
}