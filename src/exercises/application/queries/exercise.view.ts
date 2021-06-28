import { User } from "../../../users/domain/entities/users.orm-entity";

export class ExerciseView {
    id: string;
    user_id: string;
    content: string;
    created_at: Date;
    user: { name: string };

    constructor(id: string, content: string, createdAt: Date, user: User) {
        this.id = id;
        this.user_id = user.id;
        this.content = content;
        this.created_at = createdAt;
        this.user = { name: user.name };
    }
}
