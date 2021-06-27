import { UsersService } from "../services/users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): {
        hello: string;
    };
}
