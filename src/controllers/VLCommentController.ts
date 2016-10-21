import express = require("express");
import {VLCommentBusiness} from "../app/business/VLCommentBusiness";
import {IVLCommentModel} from "../app/models/interfaces/IVLCommentModel";



export class VLCommentController {

    create(req: express.Request, res: express.Response): void {
        let vLComment: IVLCommentModel = <IVLCommentModel>req.body;
        let vLID: string = req.params["_id"];
        let vLCommentBusiness = new VLCommentBusiness();

        vLCommentBusiness.create(vLID, vLComment, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    update(req: express.Request, res: express.Response): void {
        let vLComment: IVLCommentModel = <IVLCommentModel>req.body;
        let vLId: string = req.params["_id"];
        let vLCommentBusiness = new VLCommentBusiness();

        vLCommentBusiness.update(vLId, vLComment, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let vLId: string = req.params["_id"];
        let vLCommentId: string = req.params["comment_id"];
        let vLCommentBusiness = new VLCommentBusiness();

        vLCommentBusiness.remove(vLId, vLCommentId, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }
}
