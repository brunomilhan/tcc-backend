import methodOverride = require('method-override');
import express = require('express');

export class MethodOverride {

    static get config() {
        let app = express();
        app.use(methodOverride('X-HTTP-Method'));
        app.use(methodOverride('X-HTTP-Method-Override'));
        app.use(methodOverride('_method'));
        app.use(methodOverride('X-Method-Override'));

        return app;
    }

}