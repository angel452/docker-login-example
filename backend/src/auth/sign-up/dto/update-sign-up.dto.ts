import { PartialType } from '@nestjs/mapped-types';
import { SignUpDto } from './sign-up.dto';

export class UpdateSignUpDto extends PartialType(SignUpDto) {}
