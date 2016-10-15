

import {UserRepository} from "../repository/UserRepository";
export class UserBusiness {
    // instancia do meu respositorio
    private _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    findAll(callback: (error: any, result: any) => void) {
        //chamar a isntancia
        this._userRepository.findAll(callback);
    }

}