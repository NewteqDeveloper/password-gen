import { Controller, Post, Body } from '@nestjs/common';
import { PasswordService } from './password.service';
import { PasswordOptions } from '../../../../shared';

@Controller('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('generate')
  generatePassword(
    @Body()
    body: PasswordOptions,
  ) {
    const password = this.passwordService.generatePassword(body);
    return password;
  }
}
