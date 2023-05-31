import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiOperation } from '@nestjs/swagger'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    description: '这是说明',
    summary: '名称',
    tags: ['asdasd'],
  })
  getHello(): string {
    return this.appService.getHello()
  }
}
