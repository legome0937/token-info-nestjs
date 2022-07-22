import { PartialType } from '@nestjs/swagger';
import { CreateEthTokenDto } from './create-eth_token.dto';

export class UpdateEthTokenDto extends PartialType(CreateEthTokenDto) {
    address: string;

    name: string;

    symbol: string;
}
