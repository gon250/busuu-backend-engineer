export class CreateExerciseCommand {
    constructor(
        public readonly userId: string,
        public readonly content: string
    ) {}
}
