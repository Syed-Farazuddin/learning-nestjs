import { Body, Controller, Post } from '@nestjs/common';

interface User {
  name: String;
  age: Number;
  phone: String;
}

@Controller('/post')
export class PostController {
  @Post('/user')
  getUserDetails(@Body() user: User) {
    console.log(user.age + ' ' + user.name + ' ' + user.phone);
    return {
      success: true,
      message: 'User details recieved successfully',
      user,
    };
  }
}
