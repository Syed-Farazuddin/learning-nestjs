import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { ParamController } from './params.controller';
import { HelloController } from './firstApp.controller';
import { BodyDataController } from './bodydata.controller';
import { PostController } from './post.controller';

@Module({
  // imports: [],
  controllers: [
    UserController,
    ParamController,
    HelloController,
    BodyDataController,
    PostController,
  ],
  // providers: [],
})
export class AppModule {}
