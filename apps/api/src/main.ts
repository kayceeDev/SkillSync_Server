import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DEFAULT_PORT } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || DEFAULT_PORT);
}
void bootstrap()
  .catch((err) => {
    console.error('Error during app bootstrap:', err);
    process.exit(1);
  })
  .then(() => {
    console.log(
      `Application is running on: http://localhost:${process.env.PORT || DEFAULT_PORT}`,
    );
  });
