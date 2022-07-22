import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EthTokenDbRepository } from '@app/components/eth_token/repository/db/eth_token.repository';
import { EthTokenService } from '@app/components/eth_token/services/eth_token.service';
import { EthTokenController } from './eth_token.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EthTokenDbRepository])],
  exports: [TypeOrmModule, EthTokenService],
  controllers: [EthTokenController],
  providers: [EthTokenService]
})
export class EthTokenModule {}
