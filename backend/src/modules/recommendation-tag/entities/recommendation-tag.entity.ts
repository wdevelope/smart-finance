import { Entity, PrimaryKey, ManyToOne } from '@mikro-orm/core';
import { Recommendation } from '../../recommendation/entities/recommendation.entity';
import { Tag } from '../../tag/entities/tag.entity';
import { randomUUID } from 'crypto';

@Entity()
export class RecommendationTag {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @ManyToOne(() => Recommendation)
  recommendation: Recommendation;

  @ManyToOne(() => Tag)
  tag: Tag;
}
