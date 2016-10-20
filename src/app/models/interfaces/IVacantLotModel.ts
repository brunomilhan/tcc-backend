import mongoose = require('mongoose');
import {IVLCommentModel} from "./IVLCommentModel";

export interface IVacantLotModel extends mongoose.Document {
    neighborhood: string;
    description: string;
    city: string;
    addr_street: string;
    addr_number: number;
    latitude: number;
    longitude: number;
    created_by_username: string;
    created_by_user_id: number;
    priority_number: number;
    views: number;
    likes: number;
    number_solutions: number;
    comments: Array<IVLCommentModel>
}