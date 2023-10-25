import { Injectable } from '@nestjs/common';
import { UserInfo } from './UserInfo';

@Injectable()
export class UserInfoUtil implements UserInfo {
  tokenMap = {
    lsj: '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',
  };

  getUserId(): string {
    throw new Error('Method not implemented.');
  }
  getAuthToken(): string {
    return this.tokenMap.lsj;
  }
}
