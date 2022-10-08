import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    RecipeModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/my-db.sqlite3',
      autoLoadEntities: true,
      synchronize: true, //not for production
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
