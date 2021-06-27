import { EntityRepository, Repository } from "typeorm";

import { User } from "../domain/entities/users.orm-entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
