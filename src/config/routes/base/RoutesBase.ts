import express = require('express');
import {UserRoutes} from "../UserRoutes";
import {VacantLotRoutes} from "../VacantLotRoutes";

export class RoutesBase {

    static get config() {
        let app = express();
        app.use("/", new UserRoutes().routes);
        app.use("/", new VacantLotRoutes().routes);

        return app;
    }
}
