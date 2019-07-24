export default (ferries, search) => {
  return ferries.filter((ferry) => {
    const ferryMatch = ferry.ferry.toLowerCase().includes(search.text.toLowerCase());
    const classMatch = ferry.class.toLowerCase().includes(search.text.toLowerCase());
    const routeMatch = ferry.route.toLowerCase().includes(search.text.toLowerCase());
    const destinationMatch = ferry.destination.toLowerCase().includes(search.text.toLowerCase());
    const locationMatch = ferry.location.toLowerCase().includes(search.text.toLowerCase());
    return ferryMatch || classMatch || routeMatch || destinationMatch || locationMatch;
  });
};
