import {RepositoryBase} from "./base/RepositoryBase";
import {IUserModel} from "../models/interfaces/IUserModel";
import UserSchema = require('../dataAccess/schemas/UserSchema');

export class UserRepository extends RepositoryBase<IUserModel> {
    constructor() {
        super(UserSchema);
    }
}