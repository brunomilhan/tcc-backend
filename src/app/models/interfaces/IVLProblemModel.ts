import mongoose = require("mongoose");

export interface IVLProblemModel extends mongoose.Document {
    created_by_username: string;
    created_by_user_id: number;
    problem_title: string;
    problem_text: string;
    likes: number;
    status: string;
    // need add photos array here?

}
