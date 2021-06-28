import { ICommand } from "@nestjs/cqrs";

export class CreateExerciseCommand implements ICommand{
    constructor(
        public readonly userId: string,
        public readonly content: string
    ) {}
}
