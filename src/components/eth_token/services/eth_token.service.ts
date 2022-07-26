import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateEthTokenDto } from '@app/components/eth_token/dto/create-eth_token.dto';
import { UpdateEthTokenDto } from '@app/components/eth_token/dto/update-eth_token.dto';
import { EthToken } from '@app/components/eth_token/entities/eth_token.entity';
import { EthTokenRepository } from '@app/components/eth_token/repository/eth_token.repository';
import { EthTokenDbRepository } from '@app/components/eth_token/repository/db/eth_token.repository';

@Injectable()
export class EthTokenService {
  constructor(
    @InjectRepository(EthTokenDbRepository)
    private readonly ethTokenRepository: EthTokenRepository
  ) {}

  async create(createEthTokenDto: CreateEthTokenDto) {
     await this.ethTokenRepository.createToken(createEthTokenDto);
  }

  findAll(): Promise<EthToken[]> {
    return this.ethTokenRepository.findAllToken();
  }

  async findAllAddress(): Promise<EthToken[]> {
    const addresses = await this.ethTokenRepository.findAllTokenAddress();

    return addresses;
  }

  findOne(id: number): Promise<EthToken> {
    return this.ethTokenRepository.findToken(id);
  }

  async update(address: string, updateEthTokenDto: UpdateEthTokenDto) {
    
    await this.ethTokenRepository.updateToken(address, updateEthTokenDto);
  }

  async remove(id: number) {
    await this.ethTokenRepository.deleteToken(id);
  }
}
