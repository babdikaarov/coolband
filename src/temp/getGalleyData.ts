const events1 = (arr: number[], eventNum: number) => {
  return arr.map((el, i) => {
    return {
      alt: `${el}`,
      src: `./assets/temp/gallery/event${eventNum}/${i + 1}.jpg`,
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
    items: events1(Array(28).fill(1), 1),
  },
  {
    eventID: 2,
    name: "event2",
    date: "11.11.11",
    description: "near",
    items: events1(Array(13).fill(1), 2),
  },
  {
    eventID: 3,
    name: "event 3",
    date: "22.22.22",
    description: "",
    items: events1(Array(9).fill(1), 3),
  },
  {
    eventID: 4,
    name: "event 4",
    date: "12.31.23",
    description: "soon",
    items: events1(Array(28).fill(1), 4),
  },
];

const getGalleryData = [
  ...galleryTemp,
  ...galleryTemp,
  ...galleryTemp,
  ...galleryTemp,
  ...galleryTemp,
  ...galleryTemp,
  ...galleryTemp,
  ...galleryTemp,
  ...galleryTemp,
];

export default getGalleryData;
