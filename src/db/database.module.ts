import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@app/components/users/entities/user.entity';
import { EthToken } from '@app/components/eth_token/entities/eth_token.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('db.host'),
        port: config.get('db.port'),
        username: config.get('db.username'),
        password: config.get('db.password'),
        database: config.get('db.database'),
        entities: [User, EthToken],
        synchronize: config.get('app.env') === 'local' || 'dev' ? true : false,
        migrations: ['dist/db/migrations/*.js'],
        migrationsRun: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
