import { Module } from '@nestjs/common';

import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { AuthModule } from '@app/auth/auth.module';
import { UsersModule } from '@app/components/users/users.module';
import { CoreModule } from '@app/core/module';
import { ThrottleModule } from '@app/core/rate-limiter/throttle.module';
import { DatabaseModule } from '@app/db/database.module';
import { EthTokenModule } from '@app/components/eth_token/eth_token.module';

@Module({
  imports: [CoreModule, DatabaseModule, UsersModule, ThrottleModule, AuthModule, EthTokenModule],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
