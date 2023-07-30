import { Test, TestingModule } from '@nestjs/testing';
import { WatchUsersService } from './watch-users.service';

describe('WatchUsersService', () => {
  let service: WatchUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchUsersService],
    }).compile();

    service = module.get<WatchUsersService>(WatchUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
