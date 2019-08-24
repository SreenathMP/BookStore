const initialState = {
  CartItems: [],
  total: 0
};

const eventExists = (items, event) => {
  return items.CartItems.some(e => e.bookID === event.bookID);
};

const CartItem = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      if (eventExists(state, action.payload)) {
        return {
          ...state
        };
      } else {
        action.payload.quantity = 1;

        let newTotal = state.total + action.payload.price;
        return Object.assign({}, state, {
          CartItems: state.CartItems.concat(action.payload),
          total: newTotal
        });
      }
    }

    case "DELETE_ITEM": {
      let deletedItem = state.CartItems.find(
        item => item.bookID === action.payload
      );

      let newTotal = state.total - deletedItem.price * deletedItem.quantity;

      return {
        CartItems: state.CartItems.filter(e => e.bookID !== action.payload),
        total: newTotal
      };
    }

    case "ADD_QUANTITY": {
      let addedItem = state.CartItems.find(
        item => item.bookID === action.payload
      );

      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        total: newTotal
      };
    }

    case "SUB_QUANTITY": {
      let addedItem = state.CartItems.find(
        item => item.bookID === action.payload
      );

      if (addedItem.quantity === 1) {
        let newTotal = state.total - addedItem.price;

        return {
          CartItems: state.CartItems.filter(
            item => item.bookID !== action.payload
          ),
          total: newTotal
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - addedItem.price;

        return {
          ...state,
          total: newTotal
        };
      }
    }

    case "UPDATE_QUANTITY": {
      console.log(action.payload);
      let addedItem = state.CartItems.find(
        item => item.bookID === action.payload.id
      );

      addedItem.quantity = action.payload.count;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        total: newTotal
      };
    }

    default:
      return state;
  }
};

export default CartItem;
