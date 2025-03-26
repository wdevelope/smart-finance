import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { randomUUID } from 'crypto';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Income {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @Property()
  amount: number;

  @Property()
  source: string;

  @Property()
  date: Date;

  @ManyToOne(() => User, { nullable: false })
  user: User;

  @ManyToOne(() => Category, { nullable: true })
  category: Category;
}
