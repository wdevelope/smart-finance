import { PartialType } from '@nestjs/mapped-types';
import { CreateRecommendationTagDto } from './create-recommendation-tag.dto';

export class UpdateRecommendationTagDto extends PartialType(
  CreateRecommendationTagDto,
) {}
