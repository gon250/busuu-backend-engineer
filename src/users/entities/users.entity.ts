import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Exercise } from "../../exercises/entities/exercise.entity";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    name: string;

    @OneToMany(() => Exercise, (exercise) => exercise.user)
    exercises: Exercise[];
}
