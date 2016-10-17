import DataAccess = require('../DataAccess');
import {IUserModel} from "../../models/interfaces/IUserModel";
import mongooseFindOrCreate = require('mongoose-findorcreate');

let mongooseInstance = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
class UserSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            name : {
                type : String,
                require : true
            },
            facebookId: {
                type: String
            },
            facebookToken: {
                type: String
            },
            facebookName: {
                type: String
            }
        });
        schema.plugin(mongooseFindOrCreate);
        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>('users', UserSchema.schema);
export = schema;
