import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from './log-in.dto';

export class UpdateLoginDto extends PartialType(LoginDto) {}
