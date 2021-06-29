import { Test, TestingModule } from "@nestjs/testing";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { getRepositoryToken } from "@nestjs/typeorm";

import { CreateExerciseHandler } from "./create-exercise.handler";
import { Exercise } from "../../domain/entities/exercise.orm-entity";
import { CreateExerciseCommand } from "./create-exercise.command";
import { ExerciseContentLimitException } from "../../domain/exceptions/ExerciseContentLimitException";

describe("CreateExerciseHandler", () => {
    let repository: Repository<Exercise>;
    let createExerciseHandler: CreateExerciseHandler;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateExerciseHandler,
                CreateExerciseCommand,
                {
                    provide: getRepositoryToken(Exercise),
                    useClass: Repository
                }
            ]
        }).compile();
        repository = module.get<Repository<Exercise>>(
            getRepositoryToken(Exercise)
        );
    });

    describe("execute", () => {
        it("should throw NotFoundException when user is not found", async () => {
            const command = new CreateExerciseCommand(
                "user-id-122",
                "Test exercise content"
            );

            repository.find = jest.fn().mockResolvedValue(undefined);

            await expect(
                createExerciseHandler.execute(command)
            ).rejects.toThrow(NotFoundException);
        });

        it("should throw ExerciseContentLimitException when exercise length is more than 100", async () => {
            const command = new CreateExerciseCommand(
                "user-id",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            );

            repository.find = jest.fn().mockResolvedValue(undefined);

            await expect(
                createExerciseHandler.execute(command)
            ).rejects.toThrow(ExerciseContentLimitException);
        });
    });
});
