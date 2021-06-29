/**
 * IMPORTANT!!
 * This class should not have TypeORM dependency, but as interview-test and speed
 * just using this directly. In case we go with an ORM as this to work with DDD
 * we should move this to infrastructure and have a different entity here with no
 * dependency.
 */

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";

import { User } from "../../../users/domain/entities/users.orm-entity";
import { ExerciseContentLimitException } from "../exceptions/ExerciseContentLimitException";
import { ExerciseByUserLimitException } from "../exceptions/ExerciseByUserLimitException";

@Entity({ name: "exercises" })
export class Exercise {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, (user) => user.exercises, { nullable: false })
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ type: "varchar" })
    content: string;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP"
    })
    createdAt: Date;

    static create(user: User, content: string) {
        const exercise = new Exercise();
        exercise.user = user;
        exercise.content = content;
        this.validate(exercise.user, exercise.content);

        // this.event.push(new UserCreatedEvent)...

        return exercise;
    }

    static validate(user: User, content: string) {
        if (content.length > 100) {
            throw new ExerciseContentLimitException(
                "Content must be shorter than or equal to 100 characters"
            );
        }

        if (user.exercisesAmount > 10) {
            throw new ExerciseByUserLimitException(
                "User cannot have more than 10 exercises"
            );
        }
    }
}
