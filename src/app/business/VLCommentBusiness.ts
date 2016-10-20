import {VLCommentRepository} from "../repository/VLCommentRepository";
import {IVLCommentModel} from "../models/interfaces/IVLCommentModel";


export class VLCommentBusiness {
    private _vLCommentRepo: VLCommentRepository;

    constructor() {
        this._vLCommentRepo = new VLCommentRepository();
    }

    create(vl_id: string, obj: IVLCommentModel, callback: (error: any, result: any) => void) {
        let update = {
            $push: {
                comments: obj
            }
        };
        this._vLCommentRepo.update(vl_id, update, callback);
    }

    //
    update(vLId: string, obj: IVLCommentModel, callback: (error: any, result: any) => void) {
        let query = {
            _id: vLId
        };
        let update = {
            $set: {
                "comments._id": obj
            }
        };
        this._vLCommentRepo.update(query, update, callback);
    }

    remove(vLId: string, commentId: string, callback: (error: any, result: any) => void) {
        let pull = {
            $pull: {
                "_id": commentId
            }
        };
        this._vLCommentRepo.remove(pull, callback);
    }
}
