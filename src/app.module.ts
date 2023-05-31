import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphicModule } from './graphic/graphic.module'
import dataConfig from 'data.config'

@Module({
  imports: [TypeOrmModule.forRoot(dataConfig), GraphicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
