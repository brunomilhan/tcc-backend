import mongoose = require("mongoose");

export interface IUFollowingModel extends mongoose.Document {
    user_id: string;
    user_name: string;
}
