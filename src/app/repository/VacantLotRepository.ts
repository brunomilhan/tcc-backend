import {RepositoryBase} from "./base/RepositoryBase";
import VacantSchema = require('../dataAccess/schemas/VacanLotsSchema');
import mongoose = require("mongoose");
import {IVacantLotModel} from "../models/interfaces/IVacantLotModel";

export class VacantLotRepository extends RepositoryBase<IVacantLotModel> {

    constructor() {
        super(VacantSchema);
    }
}
