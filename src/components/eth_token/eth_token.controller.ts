import 'dotenv/config';
import Moralis from 'moralis/node';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
  Body,
  UseGuards,
  Version,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { EthTokenService } from '@app/components/eth_token/services/eth_token.service';
import { CreateEthTokenDto } from './dto/create-eth_token.dto';
import { UpdateEthTokenDto } from './dto/update-eth_token.dto';
import { Request, Response } from '@app/core';
import { StatusCodes } from 'http-status-codes';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { timer } from 'rxjs';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

@Controller('eth-token')
export class EthTokenController {
  constructor(private readonly ethTokenService: EthTokenService) {}

  @Post()
  @ApiBody({ type: CreateEthTokenDto })
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    try {
      const tokens: Array<CreateEthTokenDto> = req.body;

      for (const token of tokens) {
        await this.ethTokenService.create(token);
        console.log('token created');
      }

      return res.success('success', StatusCodes.CREATED);
    } catch (e) {
      return res.error(e);
    }
  }

  @Get()
  findAll() {
    return this.ethTokenService.findAll();
  }

  @Get('complete')
  async completeTokenInfo() {
    const allAddresses = await this.ethTokenService.findAllAddress();

    /* Moralis init code */
    const serverUrl = process.env.MORALIS_SERVERF_URL;
    const appId = process.env.MORALIS_APP_ID;
    const masterKey = process.env.MORALIS_MASTER_KEY;

    await Moralis.start({ serverUrl, appId, masterKey });

    for (let i = 1; i < allAddresses.length + 1; i++) {
      let addresses = [];
      addresses.push(allAddresses[i - 1].address);

      const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata({
        chain: 'eth',
        addresses: addresses,
      });

      const updateData: any = {
        name: tokenMetadata[0].name,
        symbol: tokenMetadata[0].symbol,
        decimals: tokenMetadata[0].decimals,
        logo: tokenMetadata[0].logo,
        logo_hash: tokenMetadata[0].logo_hash,
        thumbnail: tokenMetadata[0].thumbnail,
        block_number: tokenMetadata[0].block_number,
        validated: tokenMetadata[0].validated,
        //@ts-ignore
        created_at: new Date(tokenMetadata[0].created_at),
      };

      this.ethTokenService.update(tokenMetadata[0].address, updateData);

      await delay(1000 * 2);

      console.log(tokenMetadata[0].symbol);
    }

  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ethTokenService.findOne(+id);
  }

  @Patch(':address')
  update(@Param('address') address: string, @Body() updateEthTokenDto: UpdateEthTokenDto) {
    return this.ethTokenService.update(address, updateEthTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ethTokenService.remove(+id);
  }
}
