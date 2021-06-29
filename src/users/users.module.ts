import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CqrsModule } from "@nestjs/cqrs";

import { UsersController } from "./infrastructure/controllers/users.controller";
import { CreateUserHandler } from "./application/commands/create-user.handler";
import { User } from "./domain/entities/users.orm-entity";
import { FindAllUsersHandler } from "./application/queries/find-all-users.handler";

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [CreateUserHandler, FindAllUsersHandler],
    exports: []
})
export class UsersModule {}
