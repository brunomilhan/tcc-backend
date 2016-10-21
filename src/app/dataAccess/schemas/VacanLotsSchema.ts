import DataAccess = require("../DataAccess");
import mongoose = require("mongoose");
import {CommentsSchema} from "./vacantLots/embedded/CommentsSchema";
import {IVacantLotModel} from "../../models/interfaces/IVacantLotModel";
import {ProblemsSchema} from "./vacantLots/embedded/ProblemsSchema";
import {ContributorsSchema} from "./vacantLots/embedded/ContributorsSchema";
import {FollowersSchema} from "./vacantLots/embedded/FollowersSchema";
import {AchievementsSchema} from "./vacantLots/embedded/AchievementsSchema";
import {SolutionsSchema} from "./solutions/SolutionsSchema";

let mongooseInstance = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
let Schema = mongoose.Schema;

class VacanLotsSchema {
    static get schema() {
        let schema = mongooseInstance.Schema({
            neighborhood: {
                type: String,
                require: true,
                index: true
            },
            description: {
                type: String,
                require: false
            },
            city: {
                type: String,
                require: true
            },
            addr_street: {
                type: String,
                require: false
            },
            addr_number: {
                type: Number,
                require: false
            },
            latitude: {
                type: String,
                require: true
            },
            longitude: {
                type: String,
                require: true
            },
            created_by_username: {
                type: String,
                require: false
            },
            created_by_user_id: {
                type: Schema.Types.ObjectId,
                require: false
            },
            priority_number: {
                type: Number,
                require: false
            },
            views: {
                type: Number,
                default: 0,
            },
            likes: {
                type: Number,
                default: 0,
            },
            number_solutions: {
                type: Number,
                default: 0,
            },
            tag: {
                type: String,
                require: true,
                index: true
            },
            comments: {
                type: [CommentsSchema.schema]
            },
            problems: {
                type: [ProblemsSchema.schema]
            },
            contributors: {
                type: [ContributorsSchema.schema]
            },
            followers: {
                type: [FollowersSchema.schema]
            },
            achievements:{
                type: [AchievementsSchema.schema]
            },
            solutions: {
                type: [SolutionsSchema.schema]
            }
        });
        return schema;
    }
}
let schema = mongooseConnection.model<IVacantLotModel>('vacant_lots', VacanLotsSchema.schema);
export = schema;
