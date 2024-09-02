import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { ParamController } from './params.controller';
import { HelloContainer } from './firstApp.controller';
import { BodyDataController } from './body_data.controller';

@Module({
  // imports: [],
  controllers: [
    UserController,
    ParamController,
    HelloContainer,
    BodyDataController,
  ],
  // providers: [],
})
export class AppModule {}
