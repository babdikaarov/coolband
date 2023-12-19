const getRandomName = () => {
    const nameLists = ['Айгүл', 'Бекзат', 'Гүлжан', 'Даурен', 'Жазгуль', 'Жанар', 'Кайрат', 'Кундуз', 'Нургазы', 'Толгонай']
  
    const randomIndex = Math.floor(Math.random() * nameLists.length);
    return nameLists[randomIndex];
  };
  
export const getCollabCards = Array.from({ length: 20 }, () => ({
    alt: "collab",
    src: `./assets/temp/ourTeam/anara-vocal.jpg`,
    firstName: getRandomName(),
    lastName: getRandomName(),
  }));
  
  