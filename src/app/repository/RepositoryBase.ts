import mongoose = require('mongoose');

export class RepositoryBase<T extends mongoose.Document> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    findAll(callback: (error: any, result: any) => void) {
        this._model.find(callback);
    }

}