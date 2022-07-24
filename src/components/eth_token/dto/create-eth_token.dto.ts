import { ApiProperty } from '@nestjs/swagger';
import { apiResponse } from '@app/components/users/constants/api.response.dto';

export class CreateEthTokenDto {
    @ApiProperty(apiResponse.apiCreateUserFirstNameProperty)
    address: string;

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
