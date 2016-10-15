import express = require('express');
import {UserRoutes} from "./UserRoutes";

export class RoutesBase {

    static get config() {
        let app = express();
        app.use('/', new UserRoutes().routes);

        return app;
    }
}