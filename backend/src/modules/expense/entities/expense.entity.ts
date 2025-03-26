import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
import { randomUUID } from 'crypto';

@Entity()
export class Expense {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @Property()
  amount: number;

  @Property()
  description: string;

  @Property()
  date: Date;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Category)
  category: Category;
}
