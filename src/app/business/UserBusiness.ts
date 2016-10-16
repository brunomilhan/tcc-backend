import {UserRepository} from "../repository/UserRepository";
import {IUserModel} from "../models/interfaces/IUserModel";

export class UserBusiness {
    private _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    list(callback: (error: any, result: any) => void) {
        this._userRepository.list(callback);
    }

    findByID(id: string, callback: (error: any, result: any) => void) {
        this._userRepository.findByID(id, callback);
    }

    create(obj: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.create(obj, callback)
    }

    remove(id: string, callback: (error: any, result: any) => void) {
        this._userRepository.remove(id, callback);
    }

    update(id: string, obj: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.update(id, obj, callback);
    }

}