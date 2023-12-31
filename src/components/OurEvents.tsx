import eventCards from "../temp/eventCards";
import React from "react";

export default function OurEvents() {
  type EventCards = { id: number; src: string };
  const eventPhotos: EventCards[] = [...eventCards, ...eventCards];

  return (
    <div className="our-events">
      <div className="oval1">
        <h3>Наши мероприятия</h3>
      </div>
      <div className="our-events-container">
        {eventPhotos.map((card, i) => (
          <React.Fragment key={i}>
            <div key={i}>
              <img src={card.src} alt="events" />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="oval2">
        <a href="#">Подробнее</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_1_119)">
            <path
              d="M15.06 5.78301L20.717 11.44C20.9979 11.7213 21.1557 12.1025 21.1557 12.5C21.1557 12.8975 20.9979 13.2788 20.717 13.56L15.061 19.218C14.7796 19.4994 14.398 19.6575 14 19.6575C13.602 19.6575 13.2204 19.4994 12.939 19.218C12.6576 18.9366 12.4995 18.555 12.4995 18.157C12.4995 17.7591 12.6576 17.3774 12.939 17.096L16.035 14H4.5C4.10218 14 3.72064 13.842 3.43934 13.5607C3.15804 13.2794 3 12.8978 3 12.5C3 12.1022 3.15804 11.7207 3.43934 11.4394C3.72064 11.158 4.10218 11 4.5 11H16.035L12.94 7.90401C12.6587 7.62262 12.5008 7.24102 12.5009 6.84316C12.501 6.4453 12.6591 6.06377 12.9405 5.78251C13.2219 5.50125 13.6035 5.34329 14.0014 5.34338C14.3992 5.34348 14.7807 5.50162 15.062 5.78301H15.06Z"
              fill="#FCFCFC"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_119">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
