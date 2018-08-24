export const data = [
    {front: 'か', back: 'KA'}, 
    {front: 'あ', back: 'A'}, 
    {front: 'さ', back: 'SA'}, 
    {front: 'た', back: 'TA'}, 
  ];

  export const cards = [
    {front: 'か', back: 'KA', id: 1, difficulty: 2}, 
    {front: 'あ', back: 'A', id: 2, difficulty: 1}, 
    {front: 'さ', back: 'SA', id: 3, difficulty: 2}, 
    {front: 'た', back: 'TA', id: 4, difficulty: 2}, 
    {front: 'な', back: 'NA', id: 5, difficulty: 2}, 
    {front: 'は', back: 'HA', id: 6, difficulty: 2}, 
    {front: 'ま', back: 'MA', id: 7, difficulty: 2}, 
    {front: 'や', back: 'YA', id: 8, difficulty: 2}, 
    {front: 'か', back: 'KA', id: 9, difficulty: 2}, 
    {front: 'ら', back: 'RA', id: 10, difficulty: 2}, 
    {front: 'わ', back: 'WA', id: 11, difficulty: 2}, 
    {front: 'い', back: 'I', id: 12, difficulty: 1},
    {front: 'き', back: 'KI', id: 13, difficulty: 2}, 
    {front: 'し', back: 'SHI', id: 14, difficulty: 2}, 
    {front: 'ち', back: 'CHI', id: 15, difficulty: 2}, 
    {front: 'に', back: 'NI', id: 16, difficulty: 2}, 
    {front: 'ひ', back: 'HI', id: 17, difficulty: 2}, 
    {front: 'み', back: 'MI', id: 18, difficulty: 2}, 
    {front: 'り', back: 'RI', id: 19, difficulty: 2}, 
    {front: 'う', back: 'U', id: 20, difficulty: 1}, 
    {front: 'く', back: 'KU', id: 21, difficulty: 2}, 
    {front: 'す', back: 'SU', id: 22, difficulty: 2}, 
    {front: 'つ', back: 'TSU', id: 23, difficulty: 2}, 
    {front: 'ぬ', back: 'NU', id: 24, difficulty: 2}, 
    {front: 'ふ', back: 'FU', id: 25, difficulty: 2}, 
    {front: 'む', back: 'MU', id: 26, difficulty: 2}, 
    {front: 'ゆ', back: 'YU', id: 27, difficulty: 2}, 
    {front: 'る', back: 'RU', id: 28, difficulty: 2}, 
    {front: 'え', back: 'E', id: 29, difficulty: 1}, 
    {front: 'け', back: 'KE', id: 30, difficulty: 2}, 
    {front: 'せ', back: 'SE', id: 31, difficulty: 2}, 
    {front: 'て', back: 'TE', id: 32, difficulty: 2}, 
    {front: 'ね', back: 'NE', id: 33, difficulty: 2}, 
    {front: 'へ', back: 'HE', id: 34, difficulty: 2}, 
    {front: 'め', back: 'ME', id: 35, difficulty: 2}, 
    {front: 'れ', back: 'RE', id: 36, difficulty: 2},
    {front: 'お', back: 'O', id: 37, difficulty: 1}, 
    {front: 'こ', back: 'KO', id: 38, difficulty: 2}, 
    {front: 'そ', back: 'SO', id: 39, difficulty: 2}, 
    {front: 'と', back: 'TO', id: 40, difficulty: 2}, 
    {front: 'の', back: 'NO', id: 41, difficulty: 2}, 
    {front: 'ほ', back: 'HO', id: 42, difficulty: 2}, 
    {front: 'も', back: 'MO', id: 43, difficulty: 2}, 
    {front: 'よ', back: 'YO', id: 44, difficulty: 2},
    {front: 'ろ', back: 'RO', id: 45, difficulty: 2}, 
    {front: 'を', back: 'WO', id: 46, difficulty: 2}, 
    {front: 'ん', back: 'N', id: 47, difficulty: 1},
  ];

  export const difficulties = [
    {index: 1, name: 'easy', color: '#E8E8E8', textColor: '#686868'},
    {index: 2, name: 'normal', color: '#C0C0C0', textColor: 'white'},
    {index: 3, name: 'hard', color: '#989898', textColor: 'white'},
    {index: 4, name: 'impossible', color: '#686868', textColor: 'white'}];

  export const collection1 = {
      id: 1,
      type: 'collection',
      cards: [1,2,3],
  };

  export const exercise1 = {
    type: 'exercise',
    id: 1,
    name: 'Katakanas',
    urlName: 'katakanas',
    cards: [1,2],
  };

  export const exercise2 = {
    type: 'exercise',
    id: 2,
    name: 'Hiraganas',
    urlName: 'hiraganas',
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
  };