import { Injectable } from '@nestjs/common';
import { CreateRecommendationTagDto } from './dto/create-recommendation-tag.dto';
import { UpdateRecommendationTagDto } from './dto/update-recommendation-tag.dto';

@Injectable()
export class RecommendationTagService {
  create(createRecommendationTagDto: CreateRecommendationTagDto) {
    return 'This action adds a new recommendationTag';
  }

  findAll() {
    return `This action returns all recommendationTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommendationTag`;
  }

  update(id: number, updateRecommendationTagDto: UpdateRecommendationTagDto) {
    return `This action updates a #${id} recommendationTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommendationTag`;
  }
}
