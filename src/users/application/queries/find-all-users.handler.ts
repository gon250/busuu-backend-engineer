import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { FindAllUsersQuery } from "./find-all-users.query";
import { User } from "../../domain/entities/users.orm-entity";
import { UserView } from "./user.view";

@QueryHandler(FindAllUsersQuery)
export class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery> {
    constructor(
      @InjectRepository(User) private repository: Repository<User>
    ) {}

    async execute(query: FindAllUsersQuery): Promise<UserView[]> {
        return this.repository.find().then((res) => {
            return res.map((user) => new UserView(user.id, user.name));
        });
    }
}
