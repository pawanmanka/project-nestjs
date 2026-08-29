import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      success: true,
      statusCode: 200,
      message: 'Hello World!',
      data: {
        name: 'NestJS API',
        version: '1.0.0',
      },
    };
  }
}
