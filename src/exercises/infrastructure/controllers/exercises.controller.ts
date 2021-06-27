import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post
} from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import { CreateExerciseCommand } from "../../application/commad/create-exercise.command";
import { FindAllExercisesQuery } from "../../application/query/find-all-exercises.query";

@Controller("exercises")
export class ExercisesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll() {
        return this.queryBus.execute(new FindAllExercisesQuery());
    }

    // TODO: Implement auth.
    @Post()
    create(@Body() body) {
        this.commandBus.execute(
            new CreateExerciseCommand(body.userId, body.content)
        );
    }
}
