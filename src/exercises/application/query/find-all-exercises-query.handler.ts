import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindAllExercisesQuery } from "./find-all-exercises.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Exercise } from "../../domain/entities/exercise.orm-entity";
import { ExerciseView } from "./exercise.view";

@QueryHandler(FindAllExercisesQuery)
export class FindAllExercisesQueryHandler
    implements IQueryHandler<FindAllExercisesQuery>
{
    constructor(
        @InjectRepository(Exercise)
        private repository: Repository<Exercise>
    ) {}

    async execute(query: FindAllExercisesQuery): Promise<ExerciseView[]> {
        // get all Exercises by the repository
        // Serializar a ExerciseView
        // return this.repository.find();
        return [];
    }
}
