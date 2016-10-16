import DataAccess = require("../DataAccess");
import {IVacantLotModel} from "../../models/interfaces/IVacantLotModel";

let mongooseInstance = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;
class VacantLotSchema {

    static get schema() {
        let schema = mongooseInstance.Schema({
            name: {
                type: String,
                require: true
            },
            description: {
                type: String,
                require: true
            },
            // local
            city: {
                type: String,
                require: true
            },
            neighborhood: {
                type: String,
                require: true
            },
            street: {
                type: String,
                require: true
            },
            number: {
                type: Number,
                require: true
            },
            latMap: {
                type: Number,
                require: true
            },
            longMap: {
                type: Number,
                require: true
            },
            author: {
                type: String,
                require: true
            },
            // how i keep photos
            status: {
                type: String,
                require: true
            },
            priorityNumber: {
                type: Number,
                require: true
            }, //maybe transform this in collection
            views: {
                type: Number,
            },
        });

        return schema;
    }
}

let schema = mongooseConnection.model<IVacantLotModel>('vacant_lots', VacantLotSchema.schema);
export = schema;

