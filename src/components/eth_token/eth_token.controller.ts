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

@Controller('eth-token')
export class EthTokenController {
  constructor(private readonly ethTokenService: EthTokenService) {}

  @Post()
  @ApiBody({ type: CreateEthTokenDto })
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    try {
      const tokens: Array<CreateEthTokenDto> = req.body;

      console.log(tokens)

      // for (const token of tokens) {
      //   await this.ethTokenService.create(token);
      // }
      
      return res.success('success', StatusCodes.CREATED);
    } catch (e) {
      return res.error(e);
    }
  }

  @Get()
  findAll() {
    return this.ethTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ethTokenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEthTokenDto: UpdateEthTokenDto) {
    return this.ethTokenService.update(+id, updateEthTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ethTokenService.remove(+id);
  }
}
