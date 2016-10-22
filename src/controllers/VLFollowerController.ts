import express = require("express");
import {IVLFollowerModel} from "../app/models/interfaces/IVLFollowerModel";
import {VLFollowerBusiness} from "../app/business/VLFollowerBusiness";

export class VLFollowerController {

    create(req: express.Request, res: express.Response): void {
        let lotId: string = req.params["_id"];
        let follower: IVLFollowerModel = <IVLFollowerModel>req.body;
        let business = new VLFollowerBusiness();

        business.create(lotId, follower, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let lotId: string = req.params["_id"];
        let followerId: string = req.params["follower_id"];
        let business = new VLFollowerBusiness();

        business.remove(lotId, followerId, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }
}
