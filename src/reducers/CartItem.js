const initialState = {
  CartItems: []
};

const eventExists = (items, event) => {
  return items.CartItems.some(e => e.bookID === event.bookID);
};

const CartItem = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    if (eventExists(state, action.payload)) {
      return state;
    } else {
      return Object.assign({}, state, {
        CartItems: state.CartItems.concat(action.payload)
      });
    }
  }

  if (action.type === "DELETE_ITEM") {
    return {
      CartItems: state.CartItems.filter(e => e.bookID !== action.payload)
    };
  }

  if(action.type === "UPDATE_ITEM"){

    
  }

  return state;
};

export default CartItem;
