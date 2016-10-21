import express = require("express");
import {VLProblemController} from "../../controllers/VLProblemController";

export class VLProblemRoutes {
    private _vLProblemsController: VLProblemController;

    constructor(){
        this._vLProblemsController = new VLProblemController();
    }

    get routes(){
        let router = express.Router();

        router.put("/vacant-lots/:_id/problems", this._vLProblemsController.create);
        router.delete("/vacant-lots/:_id/problems/:problem_id", this._vLProblemsController.delete);
        // fix delete....

        return router;
    }

}
