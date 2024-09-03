import { Controller, Get } from '@nestjs/common';
import { UserStore } from './user.store';

@Controller('/users')
export class UserController {
  constructor(private store: UserStore) {
    console.log('Controller initialized');
    console.log(this.store);
  }
  @Get('/profile')
  getProfile() {
    console.log('/user/profile');
    return 'Profile Details of a user.....';
  }
}
