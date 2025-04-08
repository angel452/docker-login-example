import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  // String, minimo de 6 caracteres, maximo de 20
  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  name: string;
}
