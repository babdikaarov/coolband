import Footer from "../components/Footer";
const mainLogo = {
   src: "/coolbandLogo.png",
   alt: "CoolBand",
};

const secondLogo = {
   src: "/coolStudioLogo.png",
   alt: "CoolStudio",
};

const content = {
   service: {
      p: "Наши услуги",
      li: ["Репетиционная база", "Аккомпонирование", "Студия звукозаписи"],
   },
   education: {
      p: "Обучение",

      li: ["Вокал", "Гитара", "Укулеле", "Барабаны", "Конго-Бонго", "Фортепиано", "Диджеинг", "Битмейкинг"],
   },
   address: {
      p: "Адрес:",
      li: ["ул.Баайтик Баатыра 13 - цокольный этаж"],
   },
   contact: {
      p: "Контакты:",
      li: ["+996 755 608 908 Cool band", "+996 997 608 908 Cool studio", "anarkarel@gmail.com"],
   },
};

const FooterContainer = () => {
   return <Footer secondLogo={secondLogo} mainLogo={mainLogo} content={content} />;
};
export default FooterContainer;
