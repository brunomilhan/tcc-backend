import {VLSolutionTaskRepository} from "../repository/VLSolutionTaskRepository";
import {ISolutionTaskModel} from "../models/interfaces/ISolutionTaskModel";
export class VLSolutionTaskBusiness {
    private _vLSolitionTaskRepo: VLSolutionTaskRepository;

    constructor() {
        this._vLSolitionTaskRepo = new VLSolutionTaskRepository();
    }

    create(lotId: string, solutionId: string, obj: ISolutionTaskModel, callback: (error: any, result: any) => void) {
        let query = {
            _id: lotId,
            "solutions._id": solutionId
        };

        let update = {
            $push: {
                "solutions.$.tasks": obj
            }
        };
        let opts = {safe: true};
        this._vLSolitionTaskRepo.updateQueryOpts(query, update, opts, callback);
    }

    remove(lotId: string, solutionId: string, taskId: string, callback: (error: any, result: any) => void) {
        let query = {
            _id: lotId,
            "solutions._id": solutionId
        };

        let pull = {
            $pull: {
                "solutions.$.tasks": {
                    _id: taskId
                }
            }
        };
        let opts = {safe: true};
        this._vLSolitionTaskRepo.updateQueryOpts(query, pull, opts, callback);
    }
}
