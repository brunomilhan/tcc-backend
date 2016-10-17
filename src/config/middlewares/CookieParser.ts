import express = require('express');
import cookieParser = require('cookie-parser');

export class CookieParser {

    static get config(){
        let app = express();
        app.use(cookieParser());

        return app;
    }
}