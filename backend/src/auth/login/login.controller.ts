import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/log-in.dto';
import { AuthService } from '../auth.service';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
