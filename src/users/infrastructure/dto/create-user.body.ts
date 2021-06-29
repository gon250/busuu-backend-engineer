import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserBody {
    @IsNotEmpty()
    @IsString()
    public readonly name: string;
}
