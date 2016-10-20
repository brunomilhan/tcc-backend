import express = require('express');
import {UserRoutes} from "../UserRoutes";
import {VacantLotRoutes} from "../VacantLotRoutes";
import {VLCommentRoutes} from "../VLCommentRoutes";
import {VLProblemRoutes} from "../VLProblemRoutes";

export class RoutesBase {

    static get config() {
        let app = express();
        app.use("/", new UserRoutes().routes);
        app.use("/", new VacantLotRoutes().routes);
        app.use("/", new VLCommentRoutes().routes);
        app.use("/", new VLProblemRoutes().routes);

        return app;
    }
}