import {RepositoryBase} from "./base/RepositoryBase";
import {ISolutionModel} from "../models/interfaces/ISolutionModel";

import Schema = require("../dataAccess/schemas/VacanLotsSchema");

export class SolutionRepository extends RepositoryBase<ISolutionModel> {

    constructor() {
        super(Schema);
    }
}
