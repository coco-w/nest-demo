import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { GraphicService } from './graphic.service'
import { CreateGraphicDto } from './dto/create-graphic.dto'
import { UpdateGraphicDto } from './dto/update-graphic.dto'
import { Crud, CrudController } from '@nestjsx/crud'
import { Graphic } from './entities/graphic.entity'

@Crud({
  model: {
    type: Graphic,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
      // disabled: true,
    },
  },
  query: {
    alwaysPaginate: true,
  },
})
@Controller('graphic')
export class GraphicController implements CrudController<Graphic> {
  constructor(public service: GraphicService) {}
}
