import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExercisesController } from "./infrastructure/controllers/exercises.controller";
import { CreateExerciseHandler } from "./application/commads/create-exercise.handler";
import { FindAllExercisesHandler } from "./application/queries/find-all-exercises.handler";
import { Exercise } from "./domain/entities/exercise.orm-entity";
import { User } from "../users/domain/entities/users.orm-entity";

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([Exercise, User])],
    controllers: [ExercisesController],
    providers: [CreateExerciseHandler, FindAllExercisesHandler],
    exports: []
})
export class ExercisesModule {}
