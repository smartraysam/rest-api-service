import { DatabaseModule } from '../database/DatabaseModule';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import Joi from 'joi';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
