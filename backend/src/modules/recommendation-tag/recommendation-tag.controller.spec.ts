import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationTagController } from './recommendation-tag.controller';
import { RecommendationTagService } from './recommendation-tag.service';

describe('RecommendationTagController', () => {
  let controller: RecommendationTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationTagController],
      providers: [RecommendationTagService],
    }).compile();

    controller = module.get<RecommendationTagController>(
      RecommendationTagController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
