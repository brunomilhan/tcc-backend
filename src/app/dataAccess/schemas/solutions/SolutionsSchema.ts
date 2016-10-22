import DataAccess = require("../../DataAccess");
import mongoose = require("mongoose");
import {TagsToSchema} from "../vacantLots/embedded/TagsToSchema";
import {TasksSchema} from "./TasksSchema";

let mongooseInstance = DataAccess.mongooseInstance;
export class SolutionsSchema {
    static get schema() {
        let schema = mongooseInstance.Schema({
            title: {
                type: String,
                require: true,
            },
            description: {
                type: String,
                require: false
            },
            created_by_user_name: {
                type: String,
                require: true
            },
            created_by_user_id: {
                type: Number,
                require: true
            },
            likes: {
                type: Number,
                default: 0,
            },
            tag: {
                type: String,
                require: true,
                index: true
            },
            tasks: {
                type: [TasksSchema.schema]
            },
            tags_to: {
                type: [TagsToSchema.schema]
            },
            status: {
                type: String,
                require: true
            }
        });
        return schema;
    }
}
