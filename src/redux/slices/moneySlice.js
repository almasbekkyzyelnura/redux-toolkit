

import { createSlice } from "@reduxjs/toolkit"


const moneySlice = createSlice({
    name: 'money',
   
    initialState: {
        amount: 100,
        ranSan : 0
    },
    reducers: {
        deposit: (state, action) => {
            state.amount += action.payload
        },
        withdraw: (state, { payload }) => {
            state.amount -= payload
        },
        randomDeposit : (state) => {
          const randomNumber = Math.floor(Math.random()* 50) +1
          state.amount  += randomNumber,
          state.ranSan = randomNumber
        }
    }
})


export const {deposit, withdraw, randomDeposit}  = moneySlice.actions
export const moneyReducer = moneySlice.reducer