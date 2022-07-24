import { PartialType } from '@nestjs/swagger';
import { CreateEthTokenDto } from './create-eth_token.dto';

export class UpdateEthTokenDto extends PartialType(CreateEthTokenDto) {
   
    name: string;

    symbol: string;

    decimals: number;

    logo: string;

    logo_hash: string;

    thumbnail: string;

    block_number: string;

    validated: string;

    created_at: Date;
}
