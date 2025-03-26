import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { randomUUID } from 'crypto';

export enum CategoryType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

@Entity()
export class Category {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @Property()
  name: string;

  @Property({ type: 'string' })
  type: CategoryType;
}
