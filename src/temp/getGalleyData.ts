const events1 = (arr: number[], eventNum: number) => {
  return arr.map((el, i) => {
    return {
      alt: `${el}`,
      src: `/assets/temp/gallery/event${eventNum}/${i + 1}.jpg`,
      view: `${i % 3 == 0 ? "portrait" : "landscape"}`,
    };
  });
};

// console.log(events1(Array(2).fill(1), 1))

const galleryTemp = [
  {
    eventID: 1,
    name: "event 1",
    date: "12.12.12",
    description: "somewhere",
    poster: "/assets/temp/gallery/event1/1.jpg",

    items: events1(Array(28).fill(1), 1),
  },
  {
    eventID: 2,
    name: "event2",
    date: "11.11.11",
    description: "near",
    poster: "/assets/temp/gallery/event2/1.jpg",

    items: events1(Array(13).fill(1), 2),
  },
  {
    eventID: 3,
    name: "event 3",
    date: "22.22.22",
    description: "",
    poster: "/assets/temp/gallery/event3/1.jpg",

    items: events1(Array(9).fill(1), 3),
  },
  {
    eventID: 4,
    name: "event 4",
    date: "12.31.23",
    description: "soon",
    poster: "/assets/temp/gallery/event4/1.jpg",

    items: events1(Array(28).fill(1), 4),
  },
  {
    eventID: 5,
    name: "event 1",
    poster: "/assets/temp/gallery/event1/1.jpg",

    date: "12.12.12",
    description: "somewhere",
    items: events1(Array(28).fill(1), 1),
  },
  {
    eventID: 6,
    name: "event2",
    date: "11.11.11",
    description: "near",
    poster: "/assets/temp/gallery/event2/1.jpg",

    items: events1(Array(13).fill(1), 2),
  },
  {
    eventID: 7,
    name: "event 3",
    date: "22.22.22",
    description: "",
    poster: "/assets/temp/gallery/event3/1.jpg",

    items: events1(Array(9).fill(1), 3),
  },
  {
    eventID: 8,
    name: "event 4",
    date: "12.31.23",
    description: "soon",
    poster: "/assets/temp/gallery/event4/1.jpg",
    items: events1(Array(28).fill(1), 4),
  },
  {
    eventID: 9,
    name: "event 1",
    poster: "/assets/temp/gallery/event1/1.jpg",

    date: "12.12.12",
    description: "somewhere",
    items: events1(Array(28).fill(1), 1),
  },
  {
    eventID: 10,
    name: "event2",
    date: "11.11.11",
    description: "near",
    poster: "/assets/temp/gallery/event2/1.jpg",

    items: events1(Array(13).fill(1), 2),
  },
  {
    eventID: 11,
    name: "event 3",
    date: "22.22.22",
    description: "",
    poster: "/assets/temp/gallery/event3/1.jpg",

    items: events1(Array(9).fill(1), 3),
  },
  {
    eventID: 12,
    name: "event 4",
    date: "12.31.23",
    description: "soon",
    poster: "/assets/temp/gallery/event4/1.jpg",
    items: events1(Array(28).fill(1), 4),
  },
  {
    eventID: 13,
    name: "event 1",
    poster: "/assets/temp/gallery/event1/1.jpg",

    date: "12.12.12",
    description: "somewhere",
    items: events1(Array(28).fill(1), 1),
  },
  {
    eventID: 14,
    name: "event2",
    date: "11.11.11",
    description: "near",
    poster: "/assets/temp/gallery/event2/1.jpg",

    items: events1(Array(13).fill(1), 2),
  },
  {
    eventID: 15,
    name: "event 3",
    date: "22.22.22",
    description: "",
    poster: "/assets/temp/gallery/event3/1.jpg",

    items: events1(Array(9).fill(1), 3),
  },
  {
    eventID: 16,
    name: "event 4",
    date: "12.31.23",
    description: "soon",
    poster: "/assets/temp/gallery/event4/1.jpg",
    items: events1(Array(28).fill(1), 4),
  },
];

const getGalleryData = galleryTemp;

export default getGalleryData;