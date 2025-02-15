import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { KyselyModule } from 'nestjs-kysely';
import { PostgresDialect } from 'kysely';
import { Pool } from 'pg';

@Module({
  imports: [KyselyModule.forRoot({
    dialect: new PostgresDialect({
      pool: new Pool({
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: 5434,
        max: 10,
      }),
    }),
  }), UsersModule,]
})
export class AppModule {}
