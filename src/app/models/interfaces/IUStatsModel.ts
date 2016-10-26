import mongoose = require("mongoose");

export interface IUStatsModel extends mongoose.Document {
    likes: number;
    solutions: number;
    solutions_acpt: number;
    tasks_get: number;
    tasks_done: number;
    lots_registered: number;
}
