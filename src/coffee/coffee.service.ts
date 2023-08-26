import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Coffee } from './interfaces/coffee'

@Injectable()
export class CoffeeService {
  constructor(
    @Inject('COFFEE_MODEL')
    private readonly coffeeModel: Model<Coffee>,
  ) {}

  async findAll(): Promise<any> {
    return await this.coffeeModel.find()
  }
}
