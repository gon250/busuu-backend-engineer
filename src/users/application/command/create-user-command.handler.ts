import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "./create-user.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../../domain/entities/users.orm-entity";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
    implements ICommandHandler<CreateUserCommand>
{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    // TODO: Set proper type.
    execute(command: CreateUserCommand): Promise<any> {
        const newUser = new User();
        newUser.name = command.name;
        return this.userRepository.save(newUser);
    }
}
