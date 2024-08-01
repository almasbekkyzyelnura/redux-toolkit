

import { configureStore, combineReducers} from "@reduxjs/toolkit"
import {moneyReducer} from "./slices/moneySlice"

const rootReducers = combineReducers ({
    money: moneyReducer
})

const store = configureStore ({
    reducer : rootReducers
})

export default store;