import DataAccess = require("../../../DataAccess");
let mongooseInstance = DataAccess.mongooseInstance;

export class PhotosSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            upload_by_username: {
                type: String,
                require: true
            },
            upload_by_user_id: {
                type: Number,
                require: true
            },
            details: {
                type: String,
                require: false
            },
            file_url: {
                type: String,
                require: true,
            },
            tag: {
                type: String,
                require: true,
                index: true
            }
        });
        return schema;
    }
}
