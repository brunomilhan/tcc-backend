import express = require('express');
import session = require('express-session');

export class Session {

    static get config(){
        let app = express();
        app.use(session({
            secret: 'test',
            resave: true,
            saveUninitialized: true
        }));

        return app;
    }
}