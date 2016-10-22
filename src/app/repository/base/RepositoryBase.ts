import mongoose = require('mongoose');
import {IReadWrite} from "../interfaces/IReadWrite";

export class RepositoryBase<T extends mongoose.Document> implements IReadWrite<T> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    get model(): mongoose.Model<mongoose.Document> {
        return this._model;
    }

    list(callback: (error: any, result: any) => void) {
        this._model.find(callback);
    }

    findByID(id: string, callback: (error: any, result: any) => void) {
        this._model.findById(id, callback);
    }

    create(obj: T, callback: (error: any, result: any) => void) {
        this._model.create(obj, callback)
    }

    remove(id: any, callback: (error: any, result: any) => void) {
        this._model.findByIdAndRemove(id, callback);
    }

    update(query: any, obj: any, callback: (error: any, result: any) => void) {
        this._model.findByIdAndUpdate(query, obj, callback);
    }

    findOrCreate(objMatch: any, obj: any, callback: (error: any, result: any) => void) {
        this._model.findOrCreate(objMatch, obj, callback);
    }

    updateOpts(query: any, obj: any, opts: any, callback: (error: any, result: any) => void) {
        this._model.findByIdAndUpdate(query, obj, opts, callback);
    }

    updateQueryOpts(query: any, obj: any, opts: any, callback: (error: any, result: any) => void) {
        this._model.findOneAndUpdate(query, obj, opts, callback);
    }

    listRefMatch(query: any, callback: (error: any, result: any) => void) {
        this._model.find(query, callback);
    }
}
