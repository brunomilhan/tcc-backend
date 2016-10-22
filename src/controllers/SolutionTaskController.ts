import express = require("express");
import {ISolutionTaskModel} from "../app/models/interfaces/ISolutionTaskModel";
import {VLSolutionTaskBusiness} from "../app/business/VLSolutionTaskBusiness";

export class SolutionTaskController {

    create(req: express.Request, res: express.Response): void {
        let task: ISolutionTaskModel = <ISolutionTaskModel>req.body;
        let lotId: string = req.params["_id"];
        let solutionId: string = req.params["solution_id"];
        let business = new VLSolutionTaskBusiness();

        console.log(task);
        business.create(lotId, solutionId, task, (error, result) => {
            if (error)
                res.send('error ' + error);
            else
                res.send('success ' + result);
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let lotId: string = req.params["_id"];
        let solutionId: string = req.params["solution_id"];
        let taskId: string = req.params["task_id"];
        let business = new VLSolutionTaskBusiness();

        business.remove(lotId, solutionId, taskId, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }
}
