import { Body, Controller, Get, Post } from "@nestjs/common";

import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dtos/users.dto";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Get()
    getAll() {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() user: CreateUserDto) {
        return this.usersService.create(user);
    }
}
