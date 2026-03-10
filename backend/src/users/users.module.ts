import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtGuard } from '../auth/jwt.guard';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, JwtGuard],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
