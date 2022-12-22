export const cartReducer = (state, action) => {
  // console.log("***")
  // console.log(state)
  // console.log("***")
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.link !== action.payload.link),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  // console.log("***")
  // console.log(state)
  // console.log("***")
  switch (action.type) {
    case "MALE":
      return { ...state, byMale: !state.byMale };
    case "FEMALE":
      return { ...state, byFemale: !state.byFemale };
    case "WHITE":
      return { ...state, byWhite: !state.byWhite };
    case "FOLDED_SHLIEVES":
      return { ...state, byFolded: !state.byFolded };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { byFolded: false, byWhite: false, byFemale: false, byMale: false };
    default:
      return state;
  }
};