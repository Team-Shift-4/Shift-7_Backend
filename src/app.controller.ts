import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserInfoUtil } from './util/UserInfoUtil';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    readonly userInfoUtil: UserInfoUtil,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list')
  getList(): Promise<any> {
    console.log('왔');
    return this.appService.getList();
  }

  @Get('test')
  getAuthToken(): string {
    return this.userInfoUtil.getAuthToken();
  }
}
