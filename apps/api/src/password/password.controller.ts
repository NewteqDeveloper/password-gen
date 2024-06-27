import { Controller, Post, Body } from '@nestjs/common';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('generate')
  generatePassword(
    @Body()
    body: {
      length: number;
      useNumbers: boolean;
      useSymbols: boolean;
    },
  ) {
    const { length, includeNumbers, includeSymbols } = body;
    const password = this.passwordService.generatePassword(
      length,
      includeNumbers,
      includeSymbols,
    );
    return { password };
  }
}
