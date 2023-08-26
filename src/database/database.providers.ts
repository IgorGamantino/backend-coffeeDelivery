import * as mongoose from 'mongoose'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<void> =>
      mongoose
        .connect(
          'mongodb+srv://igoramantino:Diamond@cluster0.plzf34q.mongodb.net/?retryWrites=true&w=majority',
        )
        .then(() => {
          console.log('Connected to database!')
        })
        .catch(() => {
          console.log('Connection failed!')
        }),
  },
]
