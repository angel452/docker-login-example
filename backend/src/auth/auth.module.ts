import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up/sign-up.controller';
import { LoginController } from './login/login.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';

@Module({
  controllers: [LoginController, SignUpController],
  providers: [AuthService],
  imports: [PrismaModule],
})
export class AuthModule {}
