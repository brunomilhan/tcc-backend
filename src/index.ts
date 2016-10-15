/// <reference path="../typings/index.d.ts" />
import express = require('express');
import http = require('http');
import {MiddlewaresBase} from "./config/middlewares/MiddlewaresBase";

let app = express();
let port = 3000;

app.set('port', port);
app.use(MiddlewaresBase.config);

app.listen(port,() => {
    console.log('Node Listening on port: ' + port);
});
