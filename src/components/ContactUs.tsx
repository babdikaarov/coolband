export default function ContantUs() {
  return (
    <div className="contact-us">
      <h3>Связаться с нами</h3>
      <div className="contact-us-grid">
        <div className="contact-us-content">
          <h4>🎸 Не теряй связь с музыкой! 🎤</h4>
          <p>
            Ты готов к невероятной волне музыки, которая перенесет тебя в мир
            незабвенных хитов? Наши кавер-мастера ждут тебя на борту!
          </p>
          <h4>📧 Напиши нам сейчас! 📧</h4>
          <button>Связаться с нами</button>
        </div>
        <div className="map">
          {/* <iframe
            className="map"
            src="https://static.maps.2gis.com/1.0?s=880x300&pt=55.70433,37.57050~u:https%3A%2F%2Fimg.icons8.com%2Foffices%2F1x%2Fsound-recording-copyright.png"
            frameBorder="0"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14424.636932163075!2d51.462464999999995!3d25.33243725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dc6f3d7392ab%3A0x21d9395fac0a6b6!2sGulf%20Mall!5e0!3m2!1sen!2sqa!4v1702580021555!5m2!1sen!2sqa"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
