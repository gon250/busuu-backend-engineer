import { IsString } from "class-validator";

export class CreateUserBody {
    @IsString()
    public readonly name: string;
}
