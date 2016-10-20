import express = require('express');
import {UserRoutes} from "../UserRoutes";
import {VacantLotRoutes} from "../VacantLotRoutes";
import {VLCommentRoutes} from "../VLCommentRoutes";

export class RoutesBase {

    static get config() {
        let app = express();
        app.use("/", new UserRoutes().routes);
        app.use("/", new VacantLotRoutes().routes);
        app.use("/", new VLCommentRoutes().routes);

        return app;
    }
}