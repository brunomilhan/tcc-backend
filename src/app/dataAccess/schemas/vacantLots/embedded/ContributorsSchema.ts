import DataAccess = require("../../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class ContributorsSchema {

    static get schema() {
        let functionsSchema = mongooseInstance.Schema({
            title: {
                type: String,
                require: true
            }
        });

        let schema = mongooseInstance.Schema({
            user_id: {
                type: String,
                require: true
            },
            user_name: {
                type: String,
                require: true
            },
            score: {
                type: Number,
                require: true
            },
            functions: {
                type: [functionsSchema]
            }
        });
        return schema;
    }
}
