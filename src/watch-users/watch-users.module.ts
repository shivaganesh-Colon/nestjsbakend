import { Module } from '@nestjs/common';
import { WatchUsersService } from './watch-users.service';
import { WatchUsersController } from './watch-users.controller';

@Module({
  controllers: [WatchUsersController],
  providers: [WatchUsersService]
})
export class WatchUsersModule {}
