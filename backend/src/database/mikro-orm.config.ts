import { Options } from '@mikro-orm/core';
import { User } from '../modules/user/entities/user.entity';
import { Income } from '../modules/income/entities/income.entity';
import { Expense } from '../modules/expense/entities/expense.entity';
import { Category } from '../modules/category/entities/category.entity';
import { Product } from '../modules/product/entities/product.entity';
import { Recommendation } from '../modules/recommendation/entities/recommendation.entity';
import { Tag } from '../modules/tag/entities/tag.entity';
import { RecommendationTag } from '../modules/recommendation-tag/entities/recommendation-tag.entity';

const config: Options = {
  entities: [
    User,
    Income,
    Expense,
    Category,
    Product,
    Recommendation,
    Tag,
    RecommendationTag,
  ],
  dbName: 'finance.db',
  type: 'sqlite',
};

export default config;
