export const data = [
    {front: 'か', back: 'KA'}, 
    {front: 'あ', back: 'A'}, 
    {front: 'さ', back: 'SA'}, 
    {front: 'た', back: 'TA'}, 
  ];

  export const cards = [
    {front: 'か', back: 'KA', id: 1}, 
    {front: 'あ', back: 'A', id: 2}, 
    {front: 'さ', back: 'SA', id: 3}, 
    {front: 'た', back: 'TA', id: 4}, 
  ];

  export const collection1 = {
      id: 1,
      type: 'collection',
      cards: [1,2,3],
  };

  export const exercise1 = {
    type: 'exercise',
    id: 1,
    name: 'Katakanas',
    cards: [1,2],
  };

  export const exercise2 = {
    type: 'exercise',
    id: 2,
    name: 'Hiraganas',
    cards: [3,4],
  };