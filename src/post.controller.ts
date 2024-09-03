import { Body, Controller, Inject, Post } from '@nestjs/common';

interface User {
  name: String;
  age: Number;
  phone: String;
}

@Controller('/post')
export class PostController {
  constructor(@Inject('DATA') private data: any) {
    console.log('This is from post controller');
    console.log(this.data);
  }
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
