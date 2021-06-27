import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExercisesController } from "./infrastructure/controllers/exercises.controller";
import { Exercise } from "./domain/entities/exercise.orm-entity";
import { User } from "../users/domain/entities/users.orm-entity";
import { CreateExerciseCommandHandler } from "./application/commad/create-exercise-command.handler";
import { FindAllExercisesQueryHandler } from "./application/query/find-all-exercises-query.handler";

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([Exercise, User])],
    controllers: [ExercisesController],
    providers: [CreateExerciseCommandHandler, FindAllExercisesQueryHandler],
    exports: []
})
export class ExercisesModule {}
