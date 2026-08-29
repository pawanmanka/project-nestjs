import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get("users")
  getUsers() {
    return this.appService.getUsers();
  }
  @Get('users/:id')
  getUserById(@Param('id') id: string) {
    return this.appService.getUserById(Number(id));
  }
}
