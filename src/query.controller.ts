import { Controller, Get, Query } from '@nestjs/common';

@Controller('/query')
export class QueryController {
  @Get('/')
  getProductByQuery(@Query() query: Record<string, any>) {
    return query;
  }
}
