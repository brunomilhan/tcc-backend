import mongoose = require("mongoose");


export interface ITagsTo extends mongoose.Document {
    link_to: string;
    linked: boolean;
}
