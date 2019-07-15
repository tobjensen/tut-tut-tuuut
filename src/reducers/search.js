const searchReducerDefaultState = {
  text: ''
};

export default (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
};
