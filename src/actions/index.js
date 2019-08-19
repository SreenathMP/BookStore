export const AddtoCart = (payload) => {

    return {
        type: 'ADD_ITEM',payload
        
    };
    
};

export const CheckLogin = () => {

    return {
        type: 'SIGN_IN'
        
    };

    
};

export const DeleteCartItem = (payload) => {

    return {
        type: 'DELETE_ITEM',payload
        
    };
    
}; 