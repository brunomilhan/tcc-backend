import {RepositoryBase} from "./base/RepositoryBase";
import {IVLFollowerModel} from "../models/interfaces/IVLFollowerModel";

import Schema = require("../dataAccess/schemas/VacanLotsSchema");
export class VLFollowerRepository extends RepositoryBase<IVLFollowerModel> {

    constructor() {
        super(Schema)
    }
}
