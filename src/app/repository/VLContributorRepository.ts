import {RepositoryBase} from "./base/RepositoryBase";
import {IVLContributorModel} from "../models/interfaces/IVLContributorModel";

import Schema = require("../dataAccess/schemas/VacanLotsSchema");
export class VLContributorRepository extends RepositoryBase<IVLContributorModel> {

    constructor() {
        super(Schema);
    }
}
