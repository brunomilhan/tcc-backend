import express = require('express');
import {UserBusiness} from "../app/business/UserBusiness";

export class UserController {

    listAll(req: express.Request, res: express.Response): void {
        let userBusiness = new UserBusiness();
        userBusiness.findAll((error, result) => {
            if (error)
                res.send('error');
            else
                res.send(result);
        });

    }
}