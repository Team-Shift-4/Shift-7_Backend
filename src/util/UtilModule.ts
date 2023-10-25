import { Global, Module } from '@nestjs/common';
import { UserInfoUtil } from './UserInfoUtil';

@Global()
@Module({
  providers: [UserInfoUtil],
  exports: [UserInfoUtil],
})
export class UtilModule {}
