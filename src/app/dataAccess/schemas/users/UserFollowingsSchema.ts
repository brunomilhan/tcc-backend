import DataAccess = require("../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class UserFollowingsSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
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
