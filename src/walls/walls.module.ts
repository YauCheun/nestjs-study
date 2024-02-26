import { Module } from '@nestjs/common';
import { WallsService } from './walls.service';

@Module({
  providers: [WallsService]
})
export class WallsModule {}
