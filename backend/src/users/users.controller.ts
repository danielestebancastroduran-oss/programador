import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req) {
    const user = req.user || null;
    if (!user) return null;
    const { password, ...safe } = user as any;
    return safe;
  }
}
