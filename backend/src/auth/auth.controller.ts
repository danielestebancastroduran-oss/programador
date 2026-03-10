import { Body, Controller, Post, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private usersService: UsersService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const token = await this.authService.validateAndLogin(dto.username, dto.password);
    if (!token) throw new UnauthorizedException('Credenciales inválidas');
    return { accessToken: token };
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const existing = await this.usersService.findByUsername(dto.username);
    if (existing) throw new BadRequestException('El usuario ya existe');
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create(dto.username, hashed);
    const { password, ...rest } = user as any;
    return rest;
  }
}
