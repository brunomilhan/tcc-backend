import {IUserModel} from "./interfaces/IUserModel";

export class UserModel {
    private _iUserModel: IUserModel;

    constructor(iUserModel: IUserModel) {
        this._iUserModel = iUserModel;
    }


    get name(): string {
        return this._iUserModel.name;
    }

}
