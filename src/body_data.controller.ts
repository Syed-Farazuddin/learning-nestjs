import { Body, Controller, Get } from '@nestjs/common';

@Controller('/data')
export class BodyDataController {
  @Get('')
  getBodyData(@Body() data: Record<string, any>) {
    console.log(data);
    return 'This is the body data';
  }
}
