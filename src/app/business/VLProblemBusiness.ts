import {VLProblemRepository} from "../repository/VLProblemRepository";
import {IVLProblemModel} from "../models/interfaces/IVLProblemModel";

export class VLProblemBusiness {
    private _vLProblemRepo: VLProblemRepository;

    constructor() {
        this._vLProblemRepo = new VLProblemRepository();
    }

    create(vLId: string, obj: IVLProblemModel, callback: (error: any, result: any) => void) {
        let update = {
            $push: {
                problems: obj
            }
        };
        this._vLProblemRepo.update(vLId, update, callback);
    }

    remove(vLId: string, problemId: string, callback: (error: any, result: any) => void) {
        let pull = {
            $pull: {
                problems: {
                    _id: problemId
                }
            }
        };
        let opts = {safe: true};
        this._vLProblemRepo.updateOpts(vLId, pull, opts, callback);
    }
}
