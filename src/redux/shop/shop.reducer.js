import ShopActionTypes from "./shop.types";
const INIT_STATE = {
  collections: null,
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIOS:
        return {
            ...state,
            collections: action.payload
        }
    default:
      return state;
  }
};

export default shopReducer;
