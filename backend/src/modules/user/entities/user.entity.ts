import {
  Entity,
  PrimaryKey,
  Property,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { Income } from '../../income/entities/income.entity';
import { Expense } from '../../expense/entities/expense.entity';
import { Recommendation } from '../../recommendation/entities/recommendation.entity';
import { randomUUID } from 'crypto';

@Entity()
export class User {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @Property()
  email: string;

  @Property()
  password: string;

  @Property()
  createdAt: Date = new Date();

  @OneToMany(() => Income, (income) => income.user)
  incomes = new Collection<Income>(this);

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses = new Collection<Expense>(this);

  @OneToMany(() => Recommendation, (rec) => rec.user)
  recommendations = new Collection<Recommendation>(this);
}
