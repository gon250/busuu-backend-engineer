import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersController } from "./infrastructure/controllers/users.controller";
import { User } from "./domain/entities/users.orm-entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [],
    exports: []
})
export class UsersModule {}
