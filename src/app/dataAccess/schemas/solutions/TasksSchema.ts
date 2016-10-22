import DataAccess = require("../../DataAccess");
import mongoose = require("mongoose");
import {TagsToSchema} from "../vacantLots/embedded/TagsToSchema";

let mongooseInstance = DataAccess.mongooseInstance;
export class TasksSchema {
    static get schema() {
        let schema = mongooseInstance.Schema({
            title: {
                type: String,
                require: true,
            },
            details: {
                type: String,
                require: false
            },
            date_created: {
                type: Date,
                default: Date.now
            },
            difficult: {
                type: String,
                require: true
            },
            created_by_user_name: {
                type: String,
                require: true
            },
            created_by_user_id: {
                type: String,
                require: true
            },
            likes: {
                type: Number,
                default: 0,
            },
            status: {
                type: String,
                require: true
            },
            tag: {
                type: String,
                require: true,
                index: true
            },
            tags_to: {
                type: [TagsToSchema.schema]
            }
        });
        return schema;
    }
}
