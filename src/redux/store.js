import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './slices/card';

const store = configureStore({
    reducer: {
        cardReducer: cardSlice
    }
});

export default store
