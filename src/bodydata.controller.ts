import { Body, Controller, Post } from '@nestjs/common';

@Controller('/users')
export class BodyDataController {
  @Post('/data')
  getBodyData(@Body() body: Record<string, any>) {
    return {
      success: true,
    };
  }
}
