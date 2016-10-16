import {RepositoryBase} from "./base/RepositoryBase";
import {IVacantLotModel} from "../models/interfaces/IVacantLotModel";
import VacantSchema = require('../dataAccess/schemas/VacantLotSchema');

export class VacantLotRepository extends RepositoryBase<IVacantLotModel> {
    constructor() {
        super(VacantSchema);
    }
}