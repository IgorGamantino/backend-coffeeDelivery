import { Body, Controller, Get, Post } from '@nestjs/common'
import { CoffeeService } from './coffee.service'
import { CoffeeDTO } from './dto/coffee.dto'

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.coffeeService.findAll()
  }

  @Post()
  async create(@Body() coffeeDTO: CoffeeDTO): Promise<any> {
    return await this.coffeeService.create(coffeeDTO)
  }
}
