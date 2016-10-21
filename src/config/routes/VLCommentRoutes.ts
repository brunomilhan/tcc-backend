import express = require ("express");
import {VLCommentController} from "../../controllers/VLCommentController";

export class VLCommentRoutes {
    private _vLCommentController: VLCommentController;

    constructor() {
        this._vLCommentController = new VLCommentController();
    }

    get routes() {
        let router = express.Router();
        router.put("/vacant-lots/:_id/comments", this._vLCommentController.create);
        router.delete("/vacant-lots/:_id:/comments/:comment_id", this._vLCommentController.delete);

        return router
    }
}
