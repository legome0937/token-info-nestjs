import { Test, TestingModule } from '@nestjs/testing';
import { EthTokenService } from './services/eth_token.service';

describe('EthTokenService', () => {
  let service: EthTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EthTokenService],
    }).compile();

    service = module.get<EthTokenService>(EthTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
