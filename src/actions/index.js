export const AddtoCart = payload => {
  return {
    type: "ADD_ITEM",
    payload
  };
};

export const CheckLogin = () => {
  return {
    type: "SIGN_IN"
  };
};

export const DeleteCartItem = payload => {
  return {
    type: "DELETE_ITEM",
    payload
  };
};

export const AddQuantity = payload => {
  return {
    type: "ADD_QUANTITY",
    payload
  };
};

export const SubQuantity = payload => {
  return {
    type: "SUB_QUANTITY",
    payload
  };
};

export const UpdateQuantity = (id, count) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { id, count }
  };
};
