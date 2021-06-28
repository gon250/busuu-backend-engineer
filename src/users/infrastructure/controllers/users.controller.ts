import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { CreateUserCommand } from "../../application/commands/create-user.command";
import { CreateUserBody } from "../dto/create-user.body";

@Controller("users")
export class UsersController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    public async create(@Body() body: CreateUserBody): Promise<void> {
        const { name } = body;
        await this.commandBus.execute(new CreateUserCommand(name));
    }
}
