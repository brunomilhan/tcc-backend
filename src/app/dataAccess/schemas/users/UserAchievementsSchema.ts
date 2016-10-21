import DataAccess = require("../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class UserAchievementsSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            title: {
                type: String,
                require: true
            },
            description: {
                type: String,
                require: true
            },
            score: {
                type: Number,
                require: true
            },
            date: {
                type: Date,
                required: true
            },
            user_id: {
                type: Number,
                require: true
            },
            user_name: {
                type: String,
                require: true
            },
            lot_name: {
                type: String,
                require: true
            },
            lot_id: {
                type: String,
                require: true
            }
        });
        return schema;
    }
}
