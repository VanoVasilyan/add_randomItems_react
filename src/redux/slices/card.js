import { createSlice } from '@reduxjs/toolkit';
import uniqId from 'uniqid';
import { randomRGBColor, generateRandomNumber, compareItems } from '../../utils';

const initialState = {
    card: []
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addNewItem: (state) => {
            const obj = {
                id: uniqId(),
                num: generateRandomNumber(),
                bgColor: randomRGBColor()
            }
            return { ...state, card: [...state.card, obj] }
        },
        deleteItem: (state, { payload: id }) => {
            return { ...state, card: state.card.filter(item => item.id !== id) }
        },
        sortCard: (state) => {
            const newSortedArray = [...state.card];
            newSortedArray.sort(compareItems)
            return { ...state, card: newSortedArray }
        },
        clearCard: () => initialState
    }
})

export const { addNewItem, deleteItem, sortCard, clearCard } = cardSlice.actions;
export default cardSlice.reducer
