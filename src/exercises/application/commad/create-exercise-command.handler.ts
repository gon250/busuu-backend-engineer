import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Exercise } from "../../domain/entities/exercise.orm-entity";
import { CreateExerciseCommand } from "./create-exercise.command";
import { User } from "../../../users/domain/entities/users.orm-entity";

@CommandHandler(CreateExerciseCommand)
export class CreateExerciseCommandHandler implements ICommandHandler<CreateExerciseCommand> {
    constructor(
        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async execute(command: CreateExerciseCommand) {
        const newExercise = new Exercise();
        newExercise.user = await this.userRepository.findOne(command.userId);
        newExercise.content = command.content;
        return this.exerciseRepository.save(newExercise);
    }
}
