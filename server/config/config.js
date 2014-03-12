var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: 'mongodb://suhashm:multivision26@ds033499.mongolab.com:33499/multivision26',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}