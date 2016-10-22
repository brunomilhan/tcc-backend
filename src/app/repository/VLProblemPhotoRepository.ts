
import {RepositoryBase} from "./base/RepositoryBase";
import {IVLProblemPhotoModel} from "../models/interfaces/IVLProblemPhotoModel";

let Schema = require("../dataAccess/schemas/VacanLotsSchema");
export class VLProblemPhotoRepository extends RepositoryBase<IVLProblemPhotoModel> {

    constructor() {
        super(Schema)
    }
}
