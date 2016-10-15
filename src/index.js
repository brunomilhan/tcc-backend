"use strict";
/// <reference path="../typings/index.d.ts" />
var express = require('express');
var MiddlewaresBase_1 = require("./config/middlewares/MiddlewaresBase");
var app = express();
var port = 3000;
app.set('port', port);
app.use(MiddlewaresBase_1.MiddlewaresBase.config);
app.listen(port, function () {
    console.log('Node Listening on port: ' + port);
});
//# sourceMappingURL=index.js.map