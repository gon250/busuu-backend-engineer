import { UnprocessableEntityException } from "@nestjs/common";

export class ExerciseContentLimitException extends UnprocessableEntityException {
    constructor(message: string) {
        super(message);
    }
}
