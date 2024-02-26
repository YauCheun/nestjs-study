import { Test, TestingModule } from '@nestjs/testing';
import { WallsController } from './walls.controller';

describe('WallsController', () => {
  let controller: WallsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WallsController],
    }).compile();

    controller = module.get<WallsController>(WallsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
