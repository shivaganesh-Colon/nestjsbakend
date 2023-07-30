import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WatchUsersService } from './watch-users.service';
import { CreateWatchUserDto } from './dto/create-watch-user.dto';
import { UpdateWatchUserDto } from './dto/update-watch-user.dto';

@Controller('watch-users')
export class WatchUsersController {
  constructor(private readonly watchUsersService: WatchUsersService) {}

  @Post()
  create(@Body() createWatchUserDto: CreateWatchUserDto) {
    return this.watchUsersService.create(createWatchUserDto);
  }

  @Get()
  findAll() {
    return this.watchUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.watchUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWatchUserDto: UpdateWatchUserDto) {
    return this.watchUsersService.update(+id, updateWatchUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.watchUsersService.remove(+id);
  }
}
