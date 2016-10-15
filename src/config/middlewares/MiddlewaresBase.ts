import express = require('express');
import bodyParser = require('body-parser');
import {MethodOverride} from "./MethodOverride";

export class MiddlewaresBase {

    static get config() {
        let app = express();
        app.use(bodyParser.json());
        app.use(MethodOverride.config);

        return app;
    }

}