import gallery from "./getGalleyData";
const fetchData = (): Promise<typeof gallery> => {
  return new Promise((resolve) => {
    // Simulate a delay of 1 second (you can adjust this as needed)
    setTimeout(() => {
      resolve(gallery);
    }, 1000);
  });
};

export default fetchData;
