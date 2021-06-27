/**
 * This class should be placed at infrastructure level, but because speed
 * Im using this as my entity.
 */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Exercise } from "../../../exercises/domain/entities/exercise.orm-entity";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    name: string;

    @OneToMany(() => Exercise, (exercise) => exercise.user)
    exercises: Exercise[];
}
