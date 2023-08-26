import { Connection } from 'mongoose'
import { CoffeeSchema } from './coffee.schema'

export const categoryProvider = [
  {
    provide: 'Coffee',
    useFactory: (connection: Connection) =>
      connection.model('Coffee', CoffeeSchema),
    inject: [],
  },
]
