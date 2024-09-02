import { Controller, Get } from '@nestjs/common';

@Controller('/hello-world')
export class HelloContainer {
  @Get('/')
  sendHello() {
    return 'Hello World';
  }
}
