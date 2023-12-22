import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';
import { ConfigModule } from '@nestjs/config';
import { UtilModule } from './util/UtilModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['./config/.env.dev.local', './config/.env.dev'],
    }),
    UtilModule,
  ],
  controllers: [AppController, FileController],
  providers: [AppService, FileService, Logger],
})
export class AppModule {}
