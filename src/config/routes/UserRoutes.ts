
import express = require('express');
import {UserController} from "../../controllers/UserController";

export class UserRoutes {
    // controller
    private _userController: UserController;

    constructor() {
        this._userController = new UserController();
    }

    get routes() {
        let router = express.Router();
        router.get('/users', this._userController.listAll);

        return router;
    }

}