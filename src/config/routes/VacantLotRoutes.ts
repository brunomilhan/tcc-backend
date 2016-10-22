import express = require('express');
import {VacantLotController} from "../../controllers/VacantLotController";
import {Passport} from "../middlewares/Passport";
import {VLCommentController} from "../../controllers/VLCommentController";
import {VLProblemController} from "../../controllers/VLProblemController";
import {VLProblemPhotoController} from "../../controllers/VLProblemPhotoController";
import {SolutionController} from "../../controllers/SolutionController";

export class VacantLotRoutes {
    private _vacantlotController: VacantLotController;
    private _vLCommentController: VLCommentController;
    private _vLProblemController: VLProblemController;
    private _vLProblemPhotoController: VLProblemPhotoController;
    private _vLSolutionController: SolutionController;

    constructor() {
        this._vacantlotController = new VacantLotController();
        this._vLCommentController = new VLCommentController();
        this._vLProblemController = new VLProblemController();
        this._vLProblemPhotoController = new VLProblemPhotoController();
        this._vLSolutionController = new SolutionController();
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
        router.post("/vacant-lots/:_id/comments", this._vLCommentController.create);
        router.delete("/vacant-lots/:_id:/comments/:comment_id", this._vLCommentController.delete);

        // Problems routes
        router.post("/vacant-lots/:_id/problems", this._vLProblemController.create);
        router.delete("/vacant-lots/:_id/problems/:problem_id", this._vLProblemController.delete);

        // Problem Photos routes
        router.post("/vacant-lots/:_id/problems/:problem_id/photos", this._vLProblemPhotoController.create);
        router.delete("/vacant-lots/:_id/problems/:problem_id/photos/:photo_id", this._vLProblemPhotoController.delete);

        // Solutions routes
        router.post("/vacant-lots/:_id/solutions/", this._vLSolutionController.create);
        router.delete("/vacant-lots/:_id/solutions/:solution_id", this._vLSolutionController.delete);

        return router;
    }
}
