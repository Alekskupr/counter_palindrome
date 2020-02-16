const initialState = {
  counter: '0',
  palindrome: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADDONE': {
      return {
        ...state,
        counter: action.payload,
      };
    }

    case 'PALINDROME': {
      return {
        ...state,
        palindrome: action.payload,
      };
    }

    default:
      return state;
  }
}
