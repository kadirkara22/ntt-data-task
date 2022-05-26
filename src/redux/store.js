import { configureStore } from "@reduxjs/toolkit";
import insurancesSlice from "./insurancesSlice";

export const store = configureStore({
    reducer: {
        insurances: insurancesSlice
    }
})