import mongoose = require("mongoose");
import {ITagsTo} from "./ITagsTo";


export interface ISolutionTaskModel extends mongoose.Document {
    title: string;
    details: string;
    date_created: Date;
    difficult: string;
    created_by_user_name: string;
    created_by_user_id: string;
    likes: number;
    status: string;
    tag: string;
    tags_to: Array<ITagsTo>
}
