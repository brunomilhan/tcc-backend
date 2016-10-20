import {RepositoryBase} from "./base/RepositoryBase";
import {IVLProblemModel} from "../models/interfaces/IVLProblemModel";
import Schema = require("../dataAccess/schemas/VacanLotsSchema");

export class VLProblemRepository extends RepositoryBase<IVLProblemModel> {

    constructor() {
        super(Schema);
    }

}
