import mongoose = require('mongoose');
import {IVLFollowerModel} from "./IVLFollowerModel";
import {IUFollowingModel} from "./IUFollowingModel";
import {IUArchievementsModel} from "./IUArchievementsModel";
import {IUStatsModel} from "./IUStatsModel";
import {IULotsFollowingModel} from "./IULotsFollowingModel";

export interface IUserModel extends mongoose.Document {
    name: string;
    fb_id: string;
    fb_token: string;
    neighborhood: string;
    adress: string;
    addr_number: number;
    latitude: number;
    longitude: number;
    city: string;
    followers: Array<IVLFollowerModel>;
    followings: Array<IUFollowingModel>;
    achievements: Array<IUArchievementsModel>;
    stats: Array<IUStatsModel>;
    lots_following: Array<IULotsFollowingModel>;
}
