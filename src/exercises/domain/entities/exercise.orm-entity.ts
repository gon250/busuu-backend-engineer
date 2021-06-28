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
import { BadRequestException } from "@nestjs/common";

import { User } from "../../../users/domain/entities/users.orm-entity";

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

    static validate(user: User, content: string) {
        if (content.length > 100) {
            throw new BadRequestException("Content must be shorter than or equal to 100 characters");
        }

        if (user.exercisesAmount > 10) {
            throw new BadRequestException("User cannot have more than 10 exercises");
        }
    }
}
