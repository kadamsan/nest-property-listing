import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    findByEmail(email: string): Promise<User> {
        return this.userRepo.findOne({
            where: {
                email: email,
            }
        });
    }

    findById(id: number): Promise<User> {
        return this.userRepo.findOne(id);
    }


    create(createUserDto: CreateUserDto) {
        return this.userRepo.insert(createUserDto)
    }

}
