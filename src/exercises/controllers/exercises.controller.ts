import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post
} from "@nestjs/common";

import { ExercisesService } from "../services/exercises.service";
import { CreateExerciseDto } from "../dtos/exercises.dto";

@Controller("exercises")
export class ExercisesController {
    constructor(private exerciseService: ExercisesService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll() {
        return this.exerciseService.findAll();
    }

    @Post()
    create(@Body() payload: CreateExerciseDto) {
        return this.exerciseService.create(payload);
    }
}
