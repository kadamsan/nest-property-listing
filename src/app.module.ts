import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sandeep',
      password: 'sandeep',
      database: 'cuc_stg',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
