import express = require('express');
import {UserBusiness} from "../app/business/UserBusiness";
import {IUserModel} from "../app/models/interfaces/IUserModel";

export class UserController {

    list(req: express.Request, res: express.Response): void {
        let userBusiness = new UserBusiness();

        userBusiness.list((error, result) => {
            if (error)
                res.send('error');
            else
                res.send(result);
        });
    }

    create(req: express.Request, res: express.Response): void {
        let user: IUserModel = <IUserModel>req.body;
        let userBusiness = new UserBusiness();
        userBusiness.create(user, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    update(req: express.Request, res: express.Response): void {
        let user: IUserModel = <IUserModel>req.body;
        let _id: string = req.params._id;
        let userBusiness = new UserBusiness();

        userBusiness.update(_id, user, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let _id: string = req.params._id;
        let userBusiness = new UserBusiness();

        userBusiness.remove(_id, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    findByID(req: express.Request, res: express.Response): void {
        let _id: string = req.params._id;
        let userBusiness = new UserBusiness();

        userBusiness.findByID(_id, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send(result);
        });
    }
}