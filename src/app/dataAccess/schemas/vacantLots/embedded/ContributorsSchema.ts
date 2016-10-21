import DataAccess = require("../../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class ContributorsSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            user_id: {
                type: Number,
                require: true
            },
            user_name: {
                type: String,
                require: true
            },
            functions: {
                type: [],
                require: true
            },
            score: {
                type: String,
                require: true
            }
        });
        return schema;
    }
}
