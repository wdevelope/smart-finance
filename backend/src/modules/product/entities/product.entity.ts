import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { randomUUID } from 'crypto';

export enum ProductType {
  DEPOSIT = 'deposit',
  FUND = 'fund',
  BOND = 'bond',
}

@Entity()
export class Product {
  @PrimaryKey({ type: 'uuid' })
  id: string = randomUUID();

  @Property()
  name: string;

  @Property({ type: 'string' })
  type: ProductType;

  @Property()
  bank: string;

  @Property()
  interestRate: number;

  @Property()
  term: string;

  @Property()
  url: string;

  @Property()
  crawledAt: Date;
}
