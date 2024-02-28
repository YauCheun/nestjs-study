import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/entities/Comments';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Comments])],
  controllers: [CommentsController],
  providers:[CommentsService]
})
export class CommentsModule {}
