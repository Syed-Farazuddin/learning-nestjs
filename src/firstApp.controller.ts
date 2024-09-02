import { Controller, Get } from '@nestjs/common';

@Controller('/hello-world')
export class HelloController {
  @Get('/')
  sendHello() {
    return 'Hello World';
  }
}
