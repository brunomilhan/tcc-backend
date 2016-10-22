
import {VLAchievementRepository} from "../repository/VLAchievementRepository";
import {IVLAchievementModel} from "../models/interfaces/IVLAchievementModel";
export class VLAchievementBusiness {
    private _repository: VLAchievementRepository;

    constructor(){
        this._repository = new VLAchievementRepository();
    }

    create(lotId: string, obj: IVLAchievementModel, callback: (error: any, result: any) => void) {
        let update = {
            $push: {
                achievements: obj
            }
        };
        this._repository.update(lotId, update, callback);
    }

    remove(lotId: string, achievementId: string, callback: (error: any, result: any) => void) {
        let pull = {
            $pull: {
                achievements: {
                    _id: achievementId
                }
            }
        };
        let opts = {safe: true};
        this._repository.updateOpts(lotId, pull, opts, callback);
    }
}
