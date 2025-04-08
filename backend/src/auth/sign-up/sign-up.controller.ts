import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signup(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
}
