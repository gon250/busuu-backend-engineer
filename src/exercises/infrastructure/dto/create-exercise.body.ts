import { IsString } from "class-validator";

export class CreateExerciseBody {
    @IsString()
    public readonly userId: string;

    @IsString()
    public readonly content: string;
}
