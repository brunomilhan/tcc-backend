import {IVLCommentModel} from "./interfaces/IVLCommentModel";

export class VLCommentModel {
    private _iVLCommentModel: IVLCommentModel;

    constructor(iVLCommentModel: IVLCommentModel) {
        this._iVLCommentModel = iVLCommentModel;
    }

    get id(){
        return this._iVLCommentModel.id;
    }
}
