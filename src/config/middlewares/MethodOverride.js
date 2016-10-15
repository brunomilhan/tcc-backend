"use strict";
var methodOverride = require('method-override');
var express = require('express');
var MethodOverride = (function () {
    function MethodOverride() {
    }
    Object.defineProperty(MethodOverride, "config", {
        get: function () {
            var app = express();
            app.use(methodOverride('X-HTTP-Method'));
            app.use(methodOverride('X-HTTP-Method-Override'));
            app.use(methodOverride('_method'));
            app.use(methodOverride('X-Method-Override'));
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MethodOverride;
}());
exports.MethodOverride = MethodOverride;
//# sourceMappingURL=MethodOverride.js.map