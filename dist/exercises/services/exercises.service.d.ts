import { Repository } from "typeorm";
import { CreateExerciseDto } from "../dtos/exercises.dto";
import { Exercise } from "../entities/exercise.entity";
export declare class ExercisesService {
    private exerciseRepository;
    constructor(exerciseRepository: Repository<Exercise>);
    findAll(): Promise<Exercise[]>;
    findOne(id: string): Promise<Exercise>;
    create(payload: CreateExerciseDto): Promise<Exercise>;
}
