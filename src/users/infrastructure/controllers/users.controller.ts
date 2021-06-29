import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import { CreateUserCommand } from "../../application/commands/create-user.command";
import { CreateUserBody } from "../dto/create-user.body";
import { UserView } from "../../application/queries/user.view";
import { FindAllUsersQuery } from "../../application/queries/find-all-users.query";

@Controller("users")
export class UsersController {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus
    ) {}

    @Get()
    public getAll(): Promise<UserView[]> {
        return this.queryBus.execute(new FindAllUsersQuery());
    }

    @Post()
    public async create(@Body() body: CreateUserBody): Promise<void> {
        const { name } = body;
        await this.commandBus.execute(new CreateUserCommand(name));
    }
}
