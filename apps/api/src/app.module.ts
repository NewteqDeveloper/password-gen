import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordModule } from './password/password.module';
import { PasswordController } from './password/password.controller';
import { PasswordService } from './password/password.service';

@Module({
  imports: [PasswordModule],
  // controllers: [AppController, PasswordController],
  // providers: [AppService, PasswordService],
})
export class AppModule {}
