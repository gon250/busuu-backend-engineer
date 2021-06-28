import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post
} from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import { CreateExerciseCommand } from "../../application/commads/create-exercise.command";
import { FindAllExercisesQuery } from "../../application/queries/find-all-exercises.query";
import { CreateExerciseBody } from "../dto/create-exercise.body";

@Controller("exercises")
export class ExercisesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    public getAll() {
        return this.queryBus.execute(new FindAllExercisesQuery());
    }

    @Post()
    public async create(@Body() body: CreateExerciseBody): Promise<void> {
        await this.commandBus.execute(
            new CreateExerciseCommand(body.userId, body.content)
        );
    }
}
