import { NestFactory } from '@nestjs/core';
//import { AppModule } from './app.module';
import { PasswordModule } from '@src/src/password/password.module';

async function bootstrap() {
  const app = await NestFactory.create(PasswordModule);
  await app.listen(8081);
}
bootstrap();
