import { Test, TestingModule } from "@nestjs/testing";
import { Repository } from "typeorm";

import { CreateExerciseHandler } from "./create-exercise.handler";
import { Exercise } from "../../domain/entities/exercise.orm-entity";
import { CreateExerciseCommand } from "./create-exercise.command";
import { NotFoundException } from "@nestjs/common";
import { getRepositoryToken } from "@nestjs/typeorm";

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
    });
});
