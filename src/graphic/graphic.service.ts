import { Injectable } from '@nestjs/common'
import { CreateGraphicDto } from './dto/create-graphic.dto'
import { UpdateGraphicDto } from './dto/update-graphic.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Graphic } from './entities/graphic.entity'

@Injectable()
export class GraphicService extends TypeOrmCrudService<Graphic> {
  constructor(@InjectRepository(Graphic) repo) {
    super(repo)
  }
}
