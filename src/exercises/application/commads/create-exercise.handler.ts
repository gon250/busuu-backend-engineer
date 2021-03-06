import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";

import { Exercise } from "../../domain/entities/exercise.orm-entity";
import { CreateExerciseCommand } from "./create-exercise.command";
import { User } from "../../../users/domain/entities/users.orm-entity";

@CommandHandler(CreateExerciseCommand)
export class CreateExerciseHandler
    implements ICommandHandler<CreateExerciseCommand>
{
    constructor(
        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>,
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async execute(command: CreateExerciseCommand): Promise<void> {
        const currentUser = await this.userRepository
            .findOne(command.userId, {
                relations: ["exercises"]
            })
            .catch(() => {
                throw new NotFoundException();
            });

        const newExercise = await Exercise.create(currentUser, command.content);

        await this.exerciseRepository.save(newExercise);
        // eventBus.publish(newExercise.event)
    }
}
