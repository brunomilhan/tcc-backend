import mongoose = require("mongoose");

export interface IVLCommentModel extends mongoose.Document {
    created_by_username: string;
    created_by_user_id: number;
    text: string;
    likes: number;
    reply_to_comment_id: number;
}