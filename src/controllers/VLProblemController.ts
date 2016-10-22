import express = require("express");
import {IVLProblemModel} from "../app/models/interfaces/IVLProblemModel";
import {VLProblemBusiness} from "../app/business/VLProblemBusiness";


export class VLProblemController {

    create(req: express.Request, res: express.Response): void {
        let vLProblem: IVLProblemModel = <IVLProblemModel>req.body;
        let vLID: string = req.params["_id"];
        let vLProblemBusiness = new VLProblemBusiness();

        vLProblemBusiness.create(vLID, vLProblem, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let vLID: string = req.params["_id"];
        let vLProblemId = req.params["problem_id"]
        let vLProblemBusiness = new VLProblemBusiness();

        vLProblemBusiness.remove(vLID, vLProblemId, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }
}
