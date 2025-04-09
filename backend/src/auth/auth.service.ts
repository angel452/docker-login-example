import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './sign-up/dto/sign-up.dto';
import { LoginDto } from './login/dto/log-in.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp(signUpDto: SignUpDto) {
    console.log('----------------------------------------');
    console.log('Creating user with data:', signUpDto);

    try {
      const newUser = await this.prismaService.users.create({
        data: signUpDto,
      });

      const { password, ...userWithoutPassword } = newUser;

      return {
        success: true,
        message: 'User created successfully',
        data: userWithoutPassword,
      };
    } catch (error) {
      console.error('Signup error:', error);

      return {
        success: false,
        message: 'Error creating user',
        error: error.message || error,
      };
    }
  }

  async login(loginDto: LoginDto) {
    console.log('----------------------------------------');
    console.log('Logging with data:', loginDto);
    const user = await this.prismaService.users.findUnique({
      where: { email: loginDto.email },
    });

    if (!user) {
      return {
        success: false,
        message: 'User not found. Put a valid email',
        data: null,
      };
    }

    if (user.password !== loginDto.password) {
      return {
        success: false,
        message: 'Invalid password',
        data: null,
      };
    }

    console.log('User found:', user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;

    return {
      success: true,
      message: 'Login successful',
      data: userWithoutPassword,
    };
  }
}
