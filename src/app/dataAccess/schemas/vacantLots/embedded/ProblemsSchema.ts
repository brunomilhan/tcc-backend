import DataAccess = require("../../../DataAccess");
import mongoose = require("mongoose");

let mongooseInstance = DataAccess.mongooseInstance;
export class ProblemsSchema {

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
            problem_title: {
                type: String,
                require: true
            },
            problem_text: {
                type: String,
                require: true
            },
            likes: {
                type: Number,
                default: 0,
            },
            status: {
                type: String,
                require: false
            }
        });
        return schema;
    }
}