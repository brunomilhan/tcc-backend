import {VacantLotRepository} from "../repository/VacantLotRepository";
import {IVacantLotModel} from "../models/interfaces/IVacantLotModel";

export class VacantLotBusiness {
    private _vacantLotRepo: VacantLotRepository;

    constructor() {
        this._vacantLotRepo = new VacantLotRepository();
    }

    list(callback: (error: any, result: any) => void) {
        this._vacantLotRepo.list(callback);
    }

    findByID(id: string, callback: (error: any, result: any) => void) {
        this._vacantLotRepo.findByID(id, callback);
    }

    create(obj: IVacantLotModel, callback: (error: any, result: any) => void) {
        this._vacantLotRepo.create(obj, callback);
    }

    remove(id: string, callback: (error: any, result: any) => void) {
        this._vacantLotRepo.remove(id, callback);
    }

    update(id: string, obj: IVacantLotModel, callback: (error: any, result: any) => void) {
        this._vacantLotRepo.update(id, obj, callback);
    }
}
