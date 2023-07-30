import { Test, TestingModule } from '@nestjs/testing';
import { WatchUsersController } from './watch-users.controller';
import { WatchUsersService } from './watch-users.service';

describe('WatchUsersController', () => {
  let controller: WatchUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchUsersController],
      providers: [WatchUsersService],
    }).compile();

    controller = module.get<WatchUsersController>(WatchUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
