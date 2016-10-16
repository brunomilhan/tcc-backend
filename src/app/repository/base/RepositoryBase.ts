import mongoose = require('mongoose');
import {IReadWrite} from "../interfaces/IReadWrite";

export class RepositoryBase<T extends mongoose.Document> implements IReadWrite<T> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    list(callback: (error: any, result: any) => void) {
        this._model.find(callback)
    }

    findByID(id: string, callback: (error: any, result: any) => void) {
        this._model.findById(id, callback);
    }

    create(obj: T, callback: (error: any, result: any) => void) {
        this._model.create(obj, callback)
    }

    remove(id: string, callback: (error: any, result: any) => void) {
        this._model.findByIdAndRemove(id, callback);
    }

    update(id: string, obj: T, callback: (error: any, result: any) => void) {
        this._model.findByIdAndUpdate(id, obj, callback);
    }
}