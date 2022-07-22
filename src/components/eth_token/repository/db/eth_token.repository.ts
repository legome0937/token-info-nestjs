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

  createToken(payload: CreateEthTokenDto): Promise<EthToken> {
    return this.save(payload);
  }
  // updateUser(id: string, payload: UpdateUserDto): Promise<User> {
  //   // let id = parseInt(id);
  //   return this.save({ ...payload, id });
  // }
  async updateToken(id: number, user: CreateEthTokenDto): Promise<UpdateResult> {
    const result = await this.findOne(id);
    if (result === undefined) {
      throw new Error('User not found in database');
    }
    return this.update(id, {
      ...user,
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
