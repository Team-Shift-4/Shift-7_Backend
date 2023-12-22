import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/file/repo-list (GET)', () => {
    return request(app.getHttpServer)
      .get('/file/repo-list')
      .expect(200)
      .expect('t');
  }, 3000);

  it('/test (GET)', () => {
    return request(app.getHttpServer())
      .get('/test')
      .expect(200)
      .expect('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');
  });
});
