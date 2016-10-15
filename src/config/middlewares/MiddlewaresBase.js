"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var MethodOverride_1 = require("./MethodOverride");
var MiddlewaresBase = (function () {
    function MiddlewaresBase() {
    }
    Object.defineProperty(MiddlewaresBase, "config", {
        get: function () {
            var app = express();
            app.use(bodyParser.json());
            app.use(MethodOverride_1.MethodOverride.config);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewaresBase;
}());
exports.MiddlewaresBase = MiddlewaresBase;
//# sourceMappingURL=MiddlewaresBase.js.map