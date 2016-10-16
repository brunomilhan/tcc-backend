import express = require('express');
import bodyParser = require('body-parser');
import {MethodOverride} from "./MethodOverride";
import {RoutesBase} from "../routes/RoutesBase";

export class MiddlewaresBase {

    static get config() {
        let app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(MethodOverride.config);
        app.use(RoutesBase.config);

        return app;
    }

}