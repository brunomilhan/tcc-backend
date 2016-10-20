import DataAccess = require("../dataAccess/DataAccess");
import {RepositoryBase} from "./base/RepositoryBase";
import Schema = require('../dataAccess/schemas/VacanLotsSchema');
import {IVLCommentModel} from "../models/interfaces/IVLCommentModel";

export class VLCommentRepository extends RepositoryBase<IVLCommentModel> {
    constructor() {
        super(Schema);
    }
}
