import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecommendationTagService } from './recommendation-tag.service';
import { CreateRecommendationTagDto } from './dto/create-recommendation-tag.dto';
import { UpdateRecommendationTagDto } from './dto/update-recommendation-tag.dto';

@Controller('recommendation-tag')
export class RecommendationTagController {
  constructor(
    private readonly recommendationTagService: RecommendationTagService,
  ) {}

  @Post()
  create(@Body() createRecommendationTagDto: CreateRecommendationTagDto) {
    return this.recommendationTagService.create(createRecommendationTagDto);
  }

  @Get()
  findAll() {
    return this.recommendationTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommendationTagService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecommendationTagDto: UpdateRecommendationTagDto,
  ) {
    return this.recommendationTagService.update(
      +id,
      updateRecommendationTagDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommendationTagService.remove(+id);
  }
}
