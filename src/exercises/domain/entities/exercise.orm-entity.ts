import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";

import { User } from "../../../users/domain/entities/users.orm-entity";

@Entity({ name: "exercises" })
export class Exercise {
    constructor() {}

    validate() {
        // Validate lenght
        // Max 10 per user.
    }

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, (user) => user.exercises, { nullable: false })
    @JoinColumn({ name: "user_id" })
    user: User;

    // @Column({ type: "varchar", length: 100 })
    @Column({ type: "varchar" })
    content: string;

    @CreateDateColumn({
        name: "created_at",
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP"
    })
    createdAt: Date;
}
