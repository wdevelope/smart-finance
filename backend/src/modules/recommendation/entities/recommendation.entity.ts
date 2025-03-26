import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { User } from '../../user/entities/user.entity';
import { Product } from '../../product/entities/product.entity';
import { RecommendationTag } from '../../recommendation-tag/entities/recommendation-tag.entity';
import { randomUUID } from 'crypto';

@Entity()
export class Recommendation {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Product)
  product: Product;

  @Property()
  reason: string;

  @Property()
  createdAt: Date = new Date();

  @OneToMany(() => RecommendationTag, (rt) => rt.recommendation)
  tags = new Collection<RecommendationTag>(this);
}
