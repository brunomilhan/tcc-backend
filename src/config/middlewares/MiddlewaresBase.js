"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var MethodOverride_1 = require("./MethodOverride");
var RoutesBase_1 = require("../routes/base/RoutesBase");
var Passport_1 = require("./Passport");
var CookieParser_1 = require("./CookieParser");
var Session_1 = require("./Session");
var MiddlewaresBase = (function () {
    function MiddlewaresBase() {
    }
    Object.defineProperty(MiddlewaresBase, "config", {
        get: function () {
            var app = express();
            app.use(MethodOverride_1.MethodOverride.config);
            app.use(CookieParser_1.CookieParser.config);
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(Session_1.Session.config);
            // Passport Auth Middleware
            app.use(Passport_1.Passport.config);
            Passport_1.Passport.configAuthRoutes(app);
            app.use(RoutesBase_1.RoutesBase.config);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewaresBase;
}());
exports.MiddlewaresBase = MiddlewaresBase;
//# sourceMappingURL=MiddlewaresBase.js.map