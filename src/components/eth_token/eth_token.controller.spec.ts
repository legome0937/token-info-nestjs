import { Test, TestingModule } from '@nestjs/testing';
import { EthTokenController } from './eth_token.controller';
import {EthTokenService} from './services/eth_token.service';

describe('EthTokenController', () => {
  let controller: EthTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EthTokenController],
      providers: [EthTokenService],
    }).compile();

    controller = module.get<EthTokenController>(EthTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
