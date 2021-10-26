import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private  readonly  authService:  AuthService) {}

    @Post('login')
    login(@Body() user: UpdateUserDto): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    register(@Body() user: CreateUserDto): Promise<any> {
        console.log("user -> ", user);
      return this.authService.register(user);
    }  
    
}
