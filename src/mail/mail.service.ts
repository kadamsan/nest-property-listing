import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/user/dto/create-user.dto';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: CreateUserDto) {

    await this.mailerService.sendMail({
      to: user.email,
      from: '"Support Team" <support@example.com>', 
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation',
      context: { 
        name: user.name,
      },
    });
  }
}
