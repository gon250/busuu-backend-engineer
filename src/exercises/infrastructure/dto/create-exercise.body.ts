import { IsNotEmpty, IsString } from "class-validator";

export class CreateExerciseBody {
    @IsString()
    public readonly userId: string;

    @IsNotEmpty()
    @IsString()
    public readonly content: string;
}
