
import {VLFollowerRepository} from "../repository/VLFollowerRepository";
import {IVLFollowerModel} from "../models/interfaces/IVLFollowerModel";

export class VLFollowerBusiness {
    private _repository: VLFollowerRepository;

    constructor(){
        this._repository = new VLFollowerRepository();
    }

    create(lotId: string, obj: IVLFollowerModel, callback: (error: any, result: any) => void) {
        let update = {
            $push: {
                followers: obj
            }
        };

        // TO DO (DUPLICATE IN USER FOLLOWERS)

        this._repository.update(lotId, update, callback);
    }

    remove(lotId: string, followerId: string, callback: (error: any, result: any) => void) {
        let pull = {
            $pull: {
                followers: {
                    _id: followerId
                }
            }
        };

        // TO DO (DUPLICATE IN USER FOLLOWERS)

        let opts = {safe: true};
        this._repository.updateOpts(lotId, pull, opts, callback);
    }
}
