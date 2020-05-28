import data from './data.json'
const category = ['red','orange','yellow','green','cyanblue','blue','purple','grey']
const cardColor = data.map(({ list }) => list[0].value);

export {
  category,
  cardColor
}