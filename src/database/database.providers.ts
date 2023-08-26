import * as mongoose from 'mongoose'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<void> =>
      mongoose
        .connect(process.env.DATABASE_URL)
        .then(() => {
          console.log('Connected to database!')
        })
        .catch(() => {
          console.log('Connection failed!')
        }),
  },
]
