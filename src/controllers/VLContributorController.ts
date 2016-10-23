import express = require("express");
import {IVLContributorModel} from "../app/models/interfaces/IVLContributorModel";
import {VLContributorBusiness} from "../app/business/VLContributorBusiness";

export class VLContributorController {

    create(req: express.Request, res: express.Response): void {
        let contributor: IVLContributorModel = <IVLContributorModel>req.body;
        let lotId: string = req.params["_id"];
        let business = new VLContributorBusiness();

        business.create(lotId, contributor, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let lotId: string = req.params["_id"];
        let contributorId: string = req.params["contributors_id"];
        let business = new VLContributorBusiness();

        business.remove(lotId, contributorId, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }
}
