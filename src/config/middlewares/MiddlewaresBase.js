"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var MethodOverride_1 = require("./MethodOverride");
var RoutesBase_1 = require("../routes/base/RoutesBase");
var MiddlewaresBase = (function () {
    function MiddlewaresBase() {
    }
    Object.defineProperty(MiddlewaresBase, "config", {
        get: function () {
            var app = express();
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            app.use(MethodOverride_1.MethodOverride.config);
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