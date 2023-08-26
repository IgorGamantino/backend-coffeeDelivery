import * as mongoose from 'mongoose'

export const CoffeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['traditional', 'milk', 'especial', 'alcoholic'],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
