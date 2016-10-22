import mongoose = require("mongoose");

export interface IVLProblemPhotoModel extends mongoose.Document {
    upload_by_username: string;
    upload_by_user_id: string;
    details: string;
    file_url: string;
    tag: string;
}
