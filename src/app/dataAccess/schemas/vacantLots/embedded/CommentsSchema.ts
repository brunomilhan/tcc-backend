import DataAccess = require("../../../DataAccess");
import mongoose = require("mongoose");

let mongooseInstance = DataAccess.mongooseInstance;
export class CommentsSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            created_by_username: {
                type: String,
                require: true
            },
            created_by_user_id: {
                type: Number,
                require: true
            },
            text: {
                type: String,
                require: true
            },
            likes: {
                type: Number,
                default: 0,
            },
            reply_to_comment_id: {
                type: Number,
                require: false
            }
        });
        return schema;
    }
}
