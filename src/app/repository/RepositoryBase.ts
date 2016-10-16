import mongoose = require('mongoose');
import {IReadWrite} from "./IReadWrite";

export class RepositoryBase<T extends mongoose.Document> implements IReadWrite<T> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    list(callback: (error: any, result: any) => void) {
        this._model.find(callback)
    }

    findByID(id: string, callback: (error: any, result: any) => void) {
        this._model.find(id, callback);
    }

    create(obj: T, callback: (error: any, result: any) => void) {
        this._model.create(obj, callback)
    }

    remove(id: string, callback: (error: any, result: any) => void) {
        this._model.remove({_id: this.string2ObjID(id)}, (err) => callback);
    }

    update(id: string, obj: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: this.string2ObjID(id)}, obj, callback);
    }

    private string2ObjID(_id: string) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }

}