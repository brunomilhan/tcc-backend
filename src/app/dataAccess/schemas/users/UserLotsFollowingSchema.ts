import DataAccess = require("../../DataAccess");
import mongoose = require("mongoose");

let mongooseInstance = DataAccess.mongooseInstance;
let Schema = mongoose.Schema;
export class UserLotsFollowingSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            vacant_lot_id: {
                type: Schema.Types.ObjectId,
                ref: 'vacant_lots',
                require: true
            },
            vacant_lot_tag_name: {
                type: String,
                require: true
            }
        });
        return schema;
    }
}
