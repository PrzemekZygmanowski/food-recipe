import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    RecipeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Przemek',
      password: '',
      database: 'nestJS',
      autoLoadEntities: true,
      synchronize: true, //not for production
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
