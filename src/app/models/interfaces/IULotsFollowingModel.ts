import mongoose = require("mongoose");

export interface IULotsFollowingModel extends mongoose.Document {
    vacant_lot_id: string;
    vacant_lot_tag_name: string;
}
