import { model } from 'mongoose'
import { CoffeeSchema } from './coffee.schema'

export const coffeeProvider = [
  {
    provide: 'COFFEE_MODEL',
    useFactory: () => model('coffee', CoffeeSchema),
    inject: [],
  },
]
