import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CqrsModule } from "@nestjs/cqrs";

import { UsersController } from "./infrastructure/controllers/users.controller";
import { CreateUserHandler } from "./application/commands/create-user.handler";
import { User } from "./domain/entities/users.orm-entity";

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [CreateUserHandler],
    exports: []
})
export class UsersModule {}
