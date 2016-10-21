import DataAccess = require("../../../DataAccess");

let mongooseInstance = DataAccess.mongooseInstance;
export class TagsToSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            link_to: {
                type: String,
                require: false
            },
            linked: {
                type: Boolean,
                require: false
            }
        });
        return schema;
    }
}
