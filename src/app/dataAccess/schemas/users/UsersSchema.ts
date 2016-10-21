import DataAccess = require('../../DataAccess');
import mongooseFindOrCreate = require('mongoose-findorcreate');
import {UserStatsSchema} from "./UserStatsSchema";
import {UserAchievementsSchema} from "./UserAchievementsSchema";
import {IUserModel} from "../../../models/interfaces/IUserModel";
import {UserFollowersSchema} from "./UserFollowersSchema";
import {UserFollowingsSchema} from "./UserFollowingsSchema";
import {UserLotsFollowingSchema} from "./UserLotsFollowingSchema";

let mongooseInstance = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
class UsersSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            name: {
                type: String,
                require: true
            },
            fb_id: {
                type: String
            },
            fb_token: {
                type: String
            },
            neighborhood: {
                type: String,
                require: true
            },
            adress: {
                type: String,
                require: true
            },
            addr_number: {
                type: String,
                require: true
            },
            latitude: {
                type: String,
                require: true
            },
            longitude: {
                type: String,
                require: true
            },
            city: {
                type: String,
                require: true
            },
            followers: {
                type: [UserFollowersSchema.schema]
            },
            followings: {
                type: [UserFollowingsSchema.schema]
            },
            achievements: {
                type: [UserAchievementsSchema.schema]
            },
            stats: {
                type: UserStatsSchema.schema
            },
            lots_following: {
                type: [UserLotsFollowingSchema.schema]
            }
        });
        schema.plugin(mongooseFindOrCreate);
        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>('users', UsersSchema.schema);
export = schema;
