import { Test, TestingModule } from '@nestjs/testing';
import { WallsService } from './walls.service';

describe('WallsService', () => {
  let service: WallsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WallsService],
    }).compile();

    service = module.get<WallsService>(WallsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
