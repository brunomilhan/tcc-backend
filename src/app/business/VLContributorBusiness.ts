import {VLContributorRepository} from "../repository/VLContributorRepository";
import {IVLContributorModel} from "../models/interfaces/IVLContributorModel";

export class VLContributorBusiness {
    private _repository: VLContributorRepository;

    constructor() {
        this._repository = new VLContributorRepository();
    }

    create(lotId: string, obj: IVLContributorModel, callback: (error: any, result: any) => void) {
        let update = {
            $push: {
                contributors: obj
            }
        };
        this._repository.update(lotId, update, callback);
    }

    remove(lotId: string, contributorId: string, callback: (error: any, result: any) => void) {
        let pull = {
            $pull: {
                contributors: {
                    _id: contributorId
                }
            }
        };
        let opts = {safe: true};
        this._repository.updateOpts(lotId, pull, opts, callback);
    }
}
