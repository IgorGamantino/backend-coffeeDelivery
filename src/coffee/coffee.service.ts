import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Coffee } from './interfaces/coffee'
import { CoffeeDTO } from './dto/coffee.dto'

@Injectable()
export class CoffeeService {
  constructor(
    @Inject('COFFEE_MODEL')
    private readonly coffeeModel: Model<Coffee>,
  ) {}

  async findAll(): Promise<any> {
    return await this.coffeeModel.find()
  }

  async create(createCoffee: CoffeeDTO): Promise<any> {
    const createdCoffee = new this.coffeeModel(createCoffee)

    await createdCoffee.save()
  }
}
