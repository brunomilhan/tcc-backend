import {VLProblemPhotoRepository} from "../repository/VLProblemPhotoRepository";
import {IVLProblemPhotoModel} from "../models/interfaces/IVLProblemPhotoModel";
export class VLProblemPhotoBusiness {
    private _vLPPhotoRepo: VLProblemPhotoRepository;

    constructor() {
        this._vLPPhotoRepo = new VLProblemPhotoRepository;
    }

    create(vLId: string, problemId: string, obj: IVLProblemPhotoModel, callback: (error: any, result: any) => void) {
        let query = {
            _id: vLId,
            "problems._id": problemId
        };
        let update = {
            $push: {
                "problems.$.photos": obj
            }
        };
        let opts = {safe: true};
        this._vLPPhotoRepo.updateQueryOpts(query, opts, update, callback);
    }

    remove(vLId: string, problemId: string, photoId: string, callback: (error: any, result: any) => void) {
        let query = {
            _id: vLId,
            "problems._id": problemId
        };
        let pull = {
            $pull: {
                "problems.$.photos": {
                    _id: photoId
                }
            }
        };
        let opts = {safe: true};
        this._vLPPhotoRepo.updateQueryOpts(query, opts, pull, callback);
    }
}
