import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateExerciseDto } from "../dtos/exercises.dto";
import { Exercise } from "../entities/exercise.entity";
import { UsersService } from "../../users/services/users.service";

@Injectable()
export class ExercisesService {
    constructor(
        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>,
        private usersService: UsersService
    ) {}

    findAll() {
        return this.exerciseRepository.find();
    }

    findOne(id: string) {
        const exercise = this.exerciseRepository.findOne(id);
        if (!exercise) {
            throw new NotFoundException(
                `There was an error while requestion exercise with id ${id}`
            );
        }
        return exercise;
    }

    async create(payload: CreateExerciseDto) {
        const newExercise = new Exercise();
        if (payload.userId) {
            newExercise.user = await this.usersService.findOne(payload.userId);
        }
        newExercise.content = payload.content;
        return this.exerciseRepository.save(newExercise);
    }
}
