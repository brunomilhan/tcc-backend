import mongoose = require("mongoose");

export interface IVLContributorModel extends mongoose.Document {
    user_id: string;
    user_name: string;
    score: number;
}
