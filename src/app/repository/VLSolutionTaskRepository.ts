import {RepositoryBase} from "./base/RepositoryBase";
import {ISolutionTaskModel} from "../models/interfaces/ISolutionTaskModel";

import Schema = require("../dataAccess/schemas/VacanLotsSchema");
export class VLSolutionTaskRepository extends RepositoryBase<ISolutionTaskModel> {

    constructor() {
        super(Schema);
    }
}
