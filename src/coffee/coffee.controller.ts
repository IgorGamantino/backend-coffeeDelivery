import { Controller, Get } from '@nestjs/common'
import { CoffeeService } from './coffee.service'

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.coffeeService.findAll()
  }
}
