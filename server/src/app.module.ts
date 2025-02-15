import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { KyselyModule } from 'nestjs-kysely';
import { PostgresDialect } from 'kysely';
import { Pool } from 'pg';

@Module({
  imports: [KyselyModule.forRoot({
    dialect: new PostgresDialect({
      pool: new Pool({
        database: 'neondb',
        host: 'ep-twilight-frog-a2kdmfjc-pooler.eu-central-1.aws.neon.tech',
        user: 'neondb_owner',
        password: 'npg_P9cA5BRENWDl', ssl: true
      }),
    }),
  }), UsersModule],
})
export class AppModule {}
