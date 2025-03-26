import {
  Entity,
  PrimaryKey,
  Property,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { RecommendationTag } from '../../recommendation-tag/entities/recommendation-tag.entity';
import { randomUUID } from 'crypto';

@Entity()
export class Tag {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @Property()
  name: string;

  @OneToMany(() => RecommendationTag, (rt) => rt.tag)
  recommendationTags = new Collection<RecommendationTag>(this);
}
