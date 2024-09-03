import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { ParamController } from './params.controller';
import { HelloController } from './firstApp.controller';
import { BodyDataController } from './bodydata.controller';
import { PostController } from './post.controller';
import { UserStore } from './user.store';

@Module({
  // imports: [],
  controllers: [
    UserController,
    ParamController,
    HelloController,
    BodyDataController,
    PostController,
  ],
  providers: [
    UserStore,
    {
      provide: 'DATA',
      useValue: { name: 'Faraz', age: 20, phone: '6303995683' },
    },
  ],
})
export class AppModule {}
