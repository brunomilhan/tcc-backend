import {RepositoryBase} from "./base/RepositoryBase";
import {IVLAchievementModel} from "../models/interfaces/IVLAchievementModel";

import Schema = require("../dataAccess/schemas/VacanLotsSchema");
export class VLAchievementRepository extends RepositoryBase<IVLAchievementModel> {

    constructor() {
        super(Schema);
    }
}
