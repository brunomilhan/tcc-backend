import express = require("express");
import {IVLProblemPhotoModel} from "../app/models/interfaces/IVLProblemPhotoModel";
import {VLProblemPhotoBusiness} from "../app/business/VLProblemPhotoBusiness";

export class VLProblemPhotoController {

    create(req: express.Request, res: express.Response): void {
        let photo: IVLProblemPhotoModel = <IVLProblemPhotoModel>req.body;
        let lotId: string = req.params["_id"];
        let problemId: string = req.params["problem_id"];
        let business = new VLProblemPhotoBusiness();

        business.create(lotId, problemId, photo, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let lotId: string = req.params["_id"];
        let problemId = req.params["problem_id"]
        let photoId: string = req.params["photo_id"];
        let business = new VLProblemPhotoBusiness();

        business.remove(lotId, problemId, photoId, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }
}
