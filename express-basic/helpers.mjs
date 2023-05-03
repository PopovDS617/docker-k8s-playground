export const connectToDatabase = () => {
  const dummyPromise = new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
  });
  return dummyPromise;
};
