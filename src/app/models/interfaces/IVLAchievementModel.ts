import mongoose = require("mongoose");

export interface IVLAchievementModel extends mongoose.Document {
    title: string;
    description: string;
    score: string;
    date: Date;
    user_id: string;
    user_name: string;
}
