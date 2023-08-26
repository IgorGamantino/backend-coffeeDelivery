export interface Coffee {
  _id: string
  name: string
  description: string
  value: string
  quantity: number
  image: string
  type: string[]
}

// name: {
//   type: String,
//   required: true,
// },
// description: {
//   type: String,
//   required: true,
// },
// value: {
//   type: String,
//   required: true,
// },
// quantity: {
//   type: Number,
//   required: true,
// },
// type: {
//   type: String,
//   enum: ['traditional', 'milk', 'especial', 'alcoholic'],
//   required: true,
// },
// image: {
//   type: String,
//   required: true,
// },
