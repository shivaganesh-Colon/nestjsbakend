import { Injectable } from '@nestjs/common';
import { CreateWatchUserDto } from './dto/create-watch-user.dto';
import { UpdateWatchUserDto } from './dto/update-watch-user.dto';

@Injectable()
export class WatchUsersService {
  create(createWatchUserDto: CreateWatchUserDto) {
    return 'This action adds a new watchUser';
  }

  findAll() {
    return `This action returns all watchUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} watchUser`;
  }

  update(id: number, updateWatchUserDto: UpdateWatchUserDto) {
    return `This action updates a #${id} watchUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} watchUser`;
  }
}
