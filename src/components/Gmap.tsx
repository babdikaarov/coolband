export default function Gmap() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.0768177283903!2d74.60495379231148!3d42.85011112962585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb63a3c134063%3A0x406143901c59d3a9!2s13%20Baitik%20Baatyr%20St%2C%20Bishke%2C%20Kyrgyzstan!5e0!3m2!1sen!2sqa!4v1702591841500!5m2!1sen!2sqa"
        loading="lazy"
      ></iframe>
      <a
        className="map-link-box"
        href="https://2gis.kg/bishkek/firm/70000001066401992?m=74.609962%2C42.850329%2F16"
      >
        <div className="map-button "></div>
      </a>
    </div>
  );
}
