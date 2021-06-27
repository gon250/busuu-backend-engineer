import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { CreateUserCommand } from "../../application/command/create-user.command";

@Controller("users")
export class UsersController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    create(@Body() body) {
        this.commandBus.execute(new CreateUserCommand(body.name));
    }
}
