import { Injectable } from '@nestjs/common';
import { Password, PasswordOptions } from '@shared';

@Injectable()
export class PasswordService {
  generatePassword(options: PasswordOptions): Password {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let charset = letters;
    if (options.useNumbers) charset += numbers;
    if (options.useSymbols) charset += symbols;

    let password = '';
    for (let i = 0; i < options.length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return {
      password,
    };
  }
}
