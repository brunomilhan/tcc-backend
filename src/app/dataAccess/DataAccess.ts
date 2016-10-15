import mongoose = require('mongoose');

class DataAccess {
    static mongooseInstance;
    static mongooseConnection: mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): mongoose.Connection {
        if (this.mongooseInstance)
            return this.mongooseInstance;

        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('connect on mongo :) !!!');
        });
        this.mongooseInstance = mongoose.connect('mongodb://localhost/mongo_helloword');

        return this.mongooseInstance;
    }
}

DataAccess.connect();
export = DataAccess;