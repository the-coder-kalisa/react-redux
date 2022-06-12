import { configureStore, createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: "",
        password: ""
    },
    reducers: {
        changeEmail(state, action){
            state.email = action.payload;
        },
        changePassword(state, action){
            state.password = action.payload;
        }
    }
});
const newSlice = createSlice({
    name: "add to cart",
    initialState: {
        cart: []
    },
    reducers: {
        changeCart(state, action){  
            state.cart.includes(action.payload) ? state.cart =state.cart.filter((value) => value !== action.payload) : state.cart.push(action.payload);
        }
    }
})
export const actions = loginSlice.actions;
export const store = configureStore({
    reducer: {
        auth: loginSlice.reducer,
        cart: newSlice.reducer
    }
})
export const cartActions = newSlice.actions;