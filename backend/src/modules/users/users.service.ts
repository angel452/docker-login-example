import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Users[]> {
    console.log('----------------------------------------');
    console.log('Retorning all users');
    return await this.prismaService.users.findMany();
  }

  async findOne(id: number): Promise<Users> {
    console.log('----------------------------------------');
    console.log('Retorning user with id: ', id);
    const user = await this.prismaService.users.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    console.log('User found: ', user);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log('----------------------------------------');
    console.log('Updating user with id: ', id);

    await this.findOne(id);
    return this.prismaService.users.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    console.log('----------------------------------------');
    console.log('Removing user with id: ', id);

    await this.findOne(id);
    return this.prismaService.users.delete({
      where: {
        id: id,
      },
    });
  }
}
