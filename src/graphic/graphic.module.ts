import { Module } from '@nestjs/common'
import { GraphicService } from './graphic.service'
import { GraphicController } from './graphic.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Graphic } from './entities/graphic.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Graphic])],
  controllers: [GraphicController],
  providers: [GraphicService],
})
export class GraphicModule {}
