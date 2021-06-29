/**
 * IMPORTANT!!
 * This class should not have TypeORM dependency, but as interview-test and speed
 * just using this directly. In case we go with an ORM as this to work with DDD
 * we should move this to infrastructure and have a different entity here with no
 * dependency.
 */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Exercise } from "../../../exercises/domain/entities/exercise.orm-entity";
import { Expose } from "class-transformer";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    name: string;

    @OneToMany(() => Exercise, (exercise) => exercise.user)
    exercises: Exercise[];

    @Expose()
    get exercisesAmount() {
        if (this.exercises) {
            return this.exercises.length;
        }
        return null;
    }

    static create(name: string) {
        const newUser = new User();
        newUser.name = name;
        return name;
    }
}
