import { UpdateResult } from 'typeorm';

import { CreateEthTokenDto } from '@app/components/eth_token/dto/create-eth_token.dto';
import { UpdateEthTokenDto } from '@app/components/eth_token/dto/update-eth_token.dto';
import { EthToken } from '@app/components/eth_token/entities/eth_token.entity';

export interface EthTokenRepository {
  findToken(id: number): Promise<EthToken>;
  findAllToken(): Promise<EthToken[]>;
  createToken(payload: CreateEthTokenDto): Promise<EthToken>;
  updateToken(id: number, token: UpdateEthTokenDto): Promise<UpdateResult>;
  deleteToken(id: number): Promise<void>;
}
