import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly mailService: MailService
    ) { }

    private validate(userData: UpdateUserDto): Promise<User> {
        return this.userService.findByEmail(userData.email);
    }

    login(user: UpdateUserDto): Promise< any | { status: number }>{
        return this.validate(user).then((userData)=>{
          if(!userData){
            return { status: 404 };
          }
          if(userData.password === user.password) {
          let payload = {
            name: userData.name, sub: userData.id
          };
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             status: 200
          };
        } else {
            throw new UnauthorizedException;
        }

        });
    }
    
    async register(user: CreateUserDto): Promise<any>{
        const result = await this.userService.create(user);
        // send confirmation mail
        await this.mailService.sendUserConfirmation(user);

        return result;
    } 
}
