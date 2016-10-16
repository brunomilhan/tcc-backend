import DataAccess = require('../DataAccess');
import {IUserModel} from "../../models/interfaces/IUserModel";

let mongooseInstance = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
class UserSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            name : {
                type : String,
                require : true
            }
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IUserModel>('users', UserSchema.schema);
export = schema;
