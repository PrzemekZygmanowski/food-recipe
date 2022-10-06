import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'hello!';
  }

  @Get('/user')
  getSample() {
    return { name: 'PRzemek' };
  }

  @Post('')
  createFruit(@Body() fruit: { name: string }) {
    return fruit;
  }

  @Put('')
  updateFruit(@Body() fruit: { name: string }) {
    return fruit;
  }

  @Delete(':fruitId')
  deleteFruit(@Param('fruitId') fruitId: string) {
    return { fruitId };
  }
}
