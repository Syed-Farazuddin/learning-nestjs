import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class UserController {
  @Get('/profile')
  getProfile() {
    return 'Profile Details of a user.....';
  }
}
