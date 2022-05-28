import {createContext, useReducer} from 'react'
import { useContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';
import { data } from '../data';

const Cart=createContext();
faker.seed(99);

const Context = ({children}) => {

    // const products=[...Array(50)].map(()=>({
    //         id: faker.datatype.uuid(),
    //         name: faker.commerce.productName(),
    //         price:faker.commerce.price(),
    //         // image:faker.image.technics() ,
    //         image:faker.image.technics() ,
    //         inStock:faker.random.numeric([0,3,5,6,7]),
    //         fastDelivery:faker.datatype.boolean(),
    //         ratings:faker.random.numeric([1,2,3,4,5]),

    // }));

    const products=data;

    const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    });

    // console.log(products);

        const [productState, productDispatch] = useReducer(productReducer, {
            byStock:false,
            byFastDelivery:false,
            byRating:0,
            searchQuery:"",
        });

  return   <Cart.Provider value={{state,dispatch,productState,productDispatch}}>{children} </Cart.Provider>
  


};


export const CartState=()=>{
    return useContext(Cart);
};

export default Context;

