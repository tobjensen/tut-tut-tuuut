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

// import moment from 'moment';

// export default (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     const createdAtMoment = moment(expense.createdAt);
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//     const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; 
//     const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
//     return textMatch && startDateMatch && endDateMatch;
//   }).sort((a, b) => {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1
//     }
//     if (sortBy === 'amount') {
//       return a.amount < b.amount ? 1 : -1
//     }
//   }); 
// };