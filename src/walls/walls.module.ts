import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WallsService } from './walls.service';
import {WallsController} from'./walls.controller'
import { Walls } from 'src/entities/Walls';
@Module({
  imports:[TypeOrmModule.forFeature([Walls])], // 导入并注册实体
  controllers:[WallsController],
  providers: [WallsService]
})
export class WallsModule {}
