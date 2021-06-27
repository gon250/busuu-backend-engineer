import { ExercisesService } from "../services/exercises.service";
import { CreateExerciseDto } from "../dtos/exercises.dto";
export declare class ExercisesController {
    private exerciseService;
    constructor(exerciseService: ExercisesService);
    getAll(): Promise<import("../entities/exercise.entity").Exercise[]>;
    create(payload: CreateExerciseDto): Promise<import("../entities/exercise.entity").Exercise>;
}
