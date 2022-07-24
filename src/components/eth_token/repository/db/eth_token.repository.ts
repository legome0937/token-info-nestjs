import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository, UpdateResult } from 'typeorm';

import { CreateEthTokenDto } from '@app/components/eth_token/dto/create-eth_token.dto';
import { UpdateEthTokenDto } from '@app/components/eth_token/dto/update-eth_token.dto';
import { EthToken } from '@app/components/eth_token/entities/eth_token.entity';
import { EthTokenRepository } from '@app/components/eth_token/repository/eth_token.repository';

@Injectable()
@EntityRepository(EthToken)
export class EthTokenDbRepository extends Repository<EthToken> implements EthTokenRepository {
  constructor() {
    super();
  }

  async findToken(id: number): Promise<EthToken> {
    try {
      return await this.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException('User does notee exists');
    }
  }

  findAllToken(): Promise<EthToken[]> {
    return this.find();
  }

  findAllTokenAddress(): Promise<EthToken[]> {
    
    return this.find({
      select: ['address'],
    
    });
  }

  createToken(payload: CreateEthTokenDto): Promise<EthToken> {
    return this.save(payload);
  }
  // updateUser(id: string, payload: UpdateUserDto): Promise<User> {
  //   // let id = parseInt(id);
  //   return this.save({ ...payload, id });
  // }
  async updateToken(address: string, token: UpdateEthTokenDto): Promise<UpdateResult> {
    console.log(address)
    const result = await this.findOne({
      select:['name', 'symbol','decimals', 'logo', 'logo_hash', 'thumbnail', 'block_number', 'validated','created_at'],
      where: {
        address: address,
      },
    });
    
    if (result === undefined) {
      throw new Error('User not found in database');
    }
    return this.update({address}, {
      ...token,
    });
  }
  async deleteToken(id: number): Promise<void> {
    const result = await this.findOne(id);
    if (result === undefined) {
      throw new Error('User not found in database');
    }
    await this.delete(id);
  }
}
