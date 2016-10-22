import express = require("express");
import {SolutionBusiness} from "../app/business/SolutionBusiness";
import {ISolutionModel} from "../app/models/interfaces/ISolutionModel";

export class SolutionController {

    create(req: express.Request, res: express.Response): void {
        let lotId = req.params["_id"];
        let solution: ISolutionModel = <ISolutionModel>req.body;

        let solutionBusiness = new SolutionBusiness();

        solutionBusiness.create(lotId, solution, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let lotId = req.params["_id"];
        let solutionId = req.params["solution_id"];
        let solutionBusiness = new SolutionBusiness();

        solutionBusiness.remove(lotId, solutionId, (error, result) => {
            if (error)
                res.send('error ' + error);
            else
                res.send('success ' + result);
        });
    }
}
