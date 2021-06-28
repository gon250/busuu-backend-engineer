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

    async execute(query: FindAllExercisesQuery) {
        return this.repository.find({ relations: ["user"] }).then((res) => {
            return res.map(
                (exercise) =>
                    new ExerciseView(
                        exercise.id,
                        exercise.content,
                        exercise.createdAt,
                        exercise.user
                    )
            );
        });
    }
}
