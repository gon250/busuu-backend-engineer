import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../entities/users.entity";
import { CreateUserDto } from "../dtos/users.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: string) {
        const user = this.userRepository.findOne(id);
        if (!user) {
            throw new NotFoundException(
                `There was an error while requesting the user with id ${id}`
            );
        }
        return user;
    }

    async create(user: CreateUserDto) {
        const newUser = new User();
        newUser.name = user.name;
        return this.userRepository.save(newUser);
    }
}
