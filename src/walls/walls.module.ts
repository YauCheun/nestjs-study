import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WallsService } from './walls.service';
import {WallsController} from'./walls.controller'
import { Walls } from 'src/entities/Walls';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { FeedbacksController } from 'src/feedbacks/feedbacks.controller';
import { Feedbacks } from 'src/entities/Feedbacks';
import { CommentsModule } from 'src/comments/comments.module';
import { CommentsService } from 'src/comments/comments.service';
import { CommentsController } from 'src/comments/comments.controller';
import { Comments } from 'src/entities/Comments';
@Module({
  imports:[TypeOrmModule.forFeature([Walls]),TypeOrmModule.forFeature([Feedbacks]),TypeOrmModule.forFeature([Comments])], // 导入并注册实体
  controllers:[WallsController,FeedbacksController,CommentsController],
  providers: [WallsService,FeedbacksService,CommentsService]
})
export class WallsModule {}
