const ferriesReducerDefaultState = [];

export default (state = ferriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_FERRY_DATA':
      return action.data;
    default:
      return state;
  };
};
