import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { CoffeeController } from './coffee.controller'
import { CoffeeService } from './coffee.service'
import { coffeeProvider } from './coffee.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [CoffeeController],
  providers: [CoffeeService, ...coffeeProvider],
})
export class CoffeeModule {}
