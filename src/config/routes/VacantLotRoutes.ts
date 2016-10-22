import express = require('express');
import {VacantLotController} from "../../controllers/VacantLotController";
import {Passport} from "../middlewares/Passport";
import {VLCommentController} from "../../controllers/VLCommentController";
import {VLProblemController} from "../../controllers/VLProblemController";

export class VacantLotRoutes {
    private _vacantlotController: VacantLotController;
    private _vLCommentController: VLCommentController;
    private _vLProblemsController: VLProblemController;

    constructor() {
        this._vacantlotController = new VacantLotController();
        this._vLCommentController = new VLCommentController();
        this._vLProblemsController = new VLProblemController();
    }

    get routes() {
        let router = express.Router();
        //router.get('/vacant-lots', Passport.checkAuth, this._vacantlotController.list);
        router.get('/vacant-lots', this._vacantlotController.list);
        router.post('/vacant-lots', this._vacantlotController.create);
        router.get('/vacant-lots/:_id', this._vacantlotController.findByID);
        router.put('/vacant-lots/:_id', this._vacantlotController.update);
        router.delete('/vacant-lots/:_id', this._vacantlotController.delete);

        // Comments routes
        router.put("/vacant-lots/:_id/comments", this._vLCommentController.create);
        router.delete("/vacant-lots/:_id:/comments/:comment_id", this._vLCommentController.delete);

        // Problems routes
        router.post("/vacant-lots/:_id/problems", this._vLProblemsController.create);
        router.delete("/vacant-lots/:_id/problems/:problem_id", this._vLProblemsController.delete);

        return router;
    }
}
