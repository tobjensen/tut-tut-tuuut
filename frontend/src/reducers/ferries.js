const ferriesReducerDefaultState = [];

export default (state = ferriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_FERRY_DATA':
      return action.data.map((ferry) => {
        const prevFerry = state.find((prevFerry) => (prevFerry.ferry === ferry.ferry));
        if (prevFerry) {
          return {
            ...prevFerry,
            ...ferry
          }
        }
        return ferry;
      });
      case 'ADD_FAVOURITE':
        return state.map((ferry) => {
          if (action.ferry === ferry.ferry) {
            return {
              ...ferry,
              favourite: true
            };
          } else {
            return ferry;
          };
        });
      case 'REMOVE_FAVOURITE':
        return state.map((ferry) => {
          if (action.ferry === ferry.ferry) {
            return {
              ...ferry,
              favourite: false
            };
          } else {
            return ferry;
          };
        });
    default:
      return state;
  };
};
