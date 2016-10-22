import {SolutionRepository} from "../repository/SolutionRepository";
import {ISolutionModel} from "../models/interfaces/ISolutionModel";

export class SolutionBusiness {
    private _solutionRepo: SolutionRepository;

    constructor() {
        this._solutionRepo = new SolutionRepository();
    }

    create(lotId: string, obj: ISolutionModel, callback: (error: any, result: any) => void) {
        let update = {
            $inc: {number_solutions: 1},
            $push: {
                solutions: obj
            }
        };
        this._solutionRepo.update(lotId, update, callback);
    }

    remove(lotId: string, solutionId: string, callback: (error: any, result: any) => void) {
        let update = {
            $inc: {number_solutions: -1},
            $pull: {
                solutions: {
                    _id: solutionId
                }
            }
        };
        let opts = {safe: true};
        this._solutionRepo.updateOpts(lotId, update, opts, callback);
    }
}
