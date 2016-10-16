import express = require('express');
import {VacantLotController} from "../../controllers/VacantLotController";

export class VacantLotRoutes {
    private _vacantlotController: VacantLotController;

    constructor() {
        this._vacantlotController = new VacantLotController();
    }

    get routes() {
        let router = express.Router();
        router.get('/vacant-lots', this._vacantlotController.list);
        router.post('/vacant-lots', this._vacantlotController.create);
        router.get('/vacant-lots/:_id', this._vacantlotController.findByID);
        router.put('/vacant-lots/:_id', this._vacantlotController.update);
        router.delete('/vacant-lots/:_id', this._vacantlotController.delete);

        return router;
    }

}