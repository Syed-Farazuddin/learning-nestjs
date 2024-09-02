import { Controller, Get, Param } from '@nestjs/common';

@Controller('/products')
export class ParamController {
  @Get('/:productid')
  getProduct(@Param() param: Record<string, any>) {
    console.log(param);
    return {
      message: 'Product details successfully retrieved',
      products: [],
      success: true,
      params: param,
    };
  }
}
