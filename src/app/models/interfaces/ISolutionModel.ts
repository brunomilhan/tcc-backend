import mongoose = require("mongoose");

export interface ISolutionModel extends mongoose.Document {
    title: string;
    description: string;
    created_by_user_name: string;
    created_by_user_id: mongoose.Types.ObjectId;
    likes: number;
    status: string;
}
