import { Module } from '@nestjs/common';
import { RecommendationTagService } from './recommendation-tag.service';
import { RecommendationTagController } from './recommendation-tag.controller';

@Module({
  controllers: [RecommendationTagController],
  providers: [RecommendationTagService],
})
export class RecommendationTagModule {}
