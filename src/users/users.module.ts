import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CqrsModule } from "@nestjs/cqrs";

import { UsersController } from "./infrastructure/controllers/users.controller";
import { User } from "./domain/entities/users.orm-entity";
import { CreateUserCommandHandler } from "./application/command/create-user-command.handler";

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [CreateUserCommandHandler],
    exports: []
})
export class UsersModule {}
