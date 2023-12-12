import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logos">
          <Link to="/">
            <img src="./assets/logos/coolbandLogo.png" alt="CoolBand" />
          </Link>
          <Link to="/">
            <img src="./assets/logos/coolStudioLogo.png" alt="CoolStudio" />
          </Link>
        </div>
        <ul className="footer-content">
          <li className="footer-services">
            <p>Наши услуги</p>
            <ul>
              <li>Репетиционная база</li>
              <li>Аккомпонирование</li>
              <li>Студия звукозаписи</li>
            </ul>
          </li>
          <li className="footer-edu">
            <p>Обучение</p>
            <ul>
              <li>Вокал</li>
              <li>Гитара</li>
              <li>Укулеле</li>
              <li>Барабаны</li>
              <li>Конго-Бонго</li>
              <li>Фортепиано</li>
              <li>Диджеинг</li>
              <li>Битмейкинг</li>
            </ul>
          </li>
          <li className="footer-address">
            <p>Адрес:</p>
            <ul>
              <li>ул.Баайтик Баатыра 13 - цокольный этаж </li>
            </ul>
          </li>
          <li className="footer-contacts">
            <p>Контакты:</p>
            <ul>
              <li>+996 755 608 908 Cool band</li>
              <li>+996 997 608 908 Cool studio</li>
              <li>anarkarel@gmail.com</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
