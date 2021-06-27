import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExercisesController } from "./controllers/exercises.controller";
import { ExercisesService } from "./services/exercises.service";
import { Exercise } from "./entities/exercise.entity";
import { User } from "../users/entities/users.entity";
import { UsersService } from "../users/services/users.service";

@Module({
    imports: [TypeOrmModule.forFeature([Exercise, User])],
    controllers: [ExercisesController],
    providers: [ExercisesService, UsersService],
    exports: [ExercisesService]
})
export class ExercisesModule {}
