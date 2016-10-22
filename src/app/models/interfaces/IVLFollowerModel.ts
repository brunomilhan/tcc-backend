import mongoose = require("mongoose");

export interface IVLFollowerModel extends mongoose.Document {
    user_id: string;
    user_name: string;
}
