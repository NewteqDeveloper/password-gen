import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  generatePassword(
    length: number,
    useNumbers: boolean,
    useSymbols: boolean,
  ): string {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let charset = letters;
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }
}
