import mongoose = require("mongoose");

export interface IUArchievementsModel extends mongoose.Document {
    title: string;
    description: string;
    score: number;
    date: Date;
    user_id: string;
    user_name: string;
    lot_name: string;
    lot_id: string;
}
