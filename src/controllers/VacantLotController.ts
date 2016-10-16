import express = require('express');
import {VacantLotBusiness} from "../app/business/VacantLotBusiness";
import {IVacantLotModel} from "../app/models/interfaces/IVacantLotModel";

export class VacantLotController {

    list(req: express.Request, res: express.Response): void {
        let vacantLotBusiness = new VacantLotBusiness();

        vacantLotBusiness.list((error, result) => {
            if (error)
                res.send('error');
            else
                res.send(result);
        });
    }

    create(req: express.Request, res: express.Response): void {
        let vacantLot: IVacantLotModel = <IVacantLotModel>req.body;
        let vacantLotBusiness = new VacantLotBusiness();

        vacantLotBusiness.create(vacantLot, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    update(req: express.Request, res: express.Response): void {
        let vacantLot: IVacantLotModel = <IVacantLotModel>req.body;
        let _id: string = req.params['_id'];
        let vacantLotBusiness = new VacantLotBusiness();

        vacantLotBusiness.update(_id, vacantLot, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    delete(req: express.Request, res: express.Response): void {
        let _id: string = req.params['_id'];
        let vacantLotBusiness = new VacantLotBusiness();

        vacantLotBusiness.remove(_id, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send('success');
        });
    }

    findByID(req: express.Request, res: express.Response): void {
        let _id: string = req.params['_id'];
        let vacantLotBusiness = new VacantLotBusiness();

        vacantLotBusiness.findByID(_id, (error, result) => {
            if (error)
                res.send('error');
            else
                res.send(result);
        });
    }
}