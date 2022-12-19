import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import data from "../data";

const Cart = createContext();

const Context = ({ children }) => {
    const products = data;

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });
    
    const [productState, productDispatch] = useReducer(productReducer, {
        byMale: false,
        byFemale: false,
        byWhite: false,
        byFolded:false,
        searchQuery: "",
    });

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
          {children}
        </Cart.Provider>
      );

}

export const CartState = () => {
    return useContext(Cart);
  };
  
  export default Context;



