import { UnprocessableEntityException } from "@nestjs/common";

export class ExerciseByUserLimitException extends UnprocessableEntityException {
    constructor(message: string) {
        super(message);
    }
}
