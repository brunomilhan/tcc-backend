import express = require('express');
import {UserController} from "../../controllers/UserController";

export class UserRoutes {
    private _userController: UserController;

    constructor() {
        this._userController = new UserController();
    }

    get routes() {
        let router = express.Router();
        // auth endpoints
        //router.get('/users', Passport.checkAuth ,this._userController.list);
        router.get('/users', this._userController.list);
        router.post('/users', this._userController.create);
        router.get('/users/:_id', this._userController.findByID);
        router.put('/users/:_id', this._userController.update);
        router.delete('/users/:_id', this._userController.delete);

        return router;
    }

}