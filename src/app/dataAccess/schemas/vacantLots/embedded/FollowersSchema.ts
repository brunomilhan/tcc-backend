import DataAccess = require("../../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class FollowersSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            user_id: {
                type: Number,
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
