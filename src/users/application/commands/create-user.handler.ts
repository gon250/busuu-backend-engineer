import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "./create-user.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../../domain/entities/users.orm-entity";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {}

    async execute(command: CreateUserCommand): Promise<void> {
        const newUser = this.repository.create(command);
        await this.repository.save(newUser);
    }
}
