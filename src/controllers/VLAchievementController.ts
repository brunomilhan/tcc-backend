import express = require("express");
import {VLAchievementBusiness} from "../app/business/VLAchievementBusiness";
import {IVLAchievementModel} from "../app/models/interfaces/IVLAchievementModel";

export class VLAchievementController {

    create(req: express.Request, res: express.Response): void {
        let lotId: string = req.params["_id"];
        let achievement: IVLAchievementModel = <IVLAchievementModel>req.body;
        let business = new VLAchievementBusiness();

        business.create(lotId, achievement, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let lotId: string = req.params["_id"];
        let achievementId = req.params["achievement_id"];
        let business = new VLAchievementBusiness();

        business.remove(lotId, achievementId, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }
}
