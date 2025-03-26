import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/entities/user.entity';
import { Income } from './modules/income/entities/income.entity';
import { Expense } from './modules/expense/entities/expense.entity';
import { Category } from './modules/category/entities/category.entity';
import { Product } from './modules/product/entities/product.entity';
import { Recommendation } from './modules/recommendation/entities/recommendation.entity';
import { Tag } from './modules/tag/entities/tag.entity';
import { RecommendationTag } from './modules/recommendation-tag/entities/recommendation-tag.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature([
      User,
      Income,
      Expense,
      Category,
      Product,
      Recommendation,
      Tag,
      RecommendationTag,
    ]),
    UserModule,
    // 각 모듈 추가
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
