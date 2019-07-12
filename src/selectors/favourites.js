export default (ferries) => {
  return ferries.filter((ferry) => {
    const isFavourite = ferry.favourite;
    return isFavourite
  });
};