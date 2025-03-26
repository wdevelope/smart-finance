import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationTagService } from './recommendation-tag.service';

describe('RecommendationTagService', () => {
  let service: RecommendationTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommendationTagService],
    }).compile();

    service = module.get<RecommendationTagService>(RecommendationTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
