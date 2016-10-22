import DataAccess = require("../../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class AchievementsSchema {

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
                default: Date.now
            },
            user_id: {
                type: String,
                require: true
            },
            user_name: {
                type: String,
                require: true
            }
        });
        return schema;
    }
}
