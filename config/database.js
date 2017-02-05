var mongoose = require('mongoose');


module.exports = function(uri) {

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function() {
        console.log('Conectado ao MongoDB');
    });

    mongoose.connection.on('error', function(error) {
        console.log('Erro na conexão com o MongoDB. \n ' + error);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Conexão fechada pelo témino da aplicação');
            process.exit(0);
        });
    });
}
