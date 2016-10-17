import express = require('express');
import bodyParser = require('body-parser');
import {MethodOverride} from "./MethodOverride";
import {RoutesBase} from "../routes/base/RoutesBase";
import {Passport} from "./Passport";
import passport = require('passport');
import {CookieParser} from "./CookieParser";
import {Session} from "./Session";

export class MiddlewaresBase {

    static get config() {
        let app = express();
        app.use(MethodOverride.config);
        app.use(CookieParser.config);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(Session.config);

        // Passport Auth Middleware
        app.use(Passport.config);
        Passport.configAuthRoutes(app);

        app.use(RoutesBase.config);

        return app;
    }

}