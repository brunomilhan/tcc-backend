import DataAccess = require("../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class UserStatsSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            likes: {
                type: Number,
                require: false
            },
            solutions: {
                type: Number,
                require: false
            },
            solutions_acpt: {
                type: Number,
                required: false
            },
            tasks_get: {
                type: Number,
                require: false
            },
            tasks_done: {
                type: Number,
                require: false
            },
            lots_registered: {
                type: Number,
                require: false
            }
        });
        return schema;
    }
}
