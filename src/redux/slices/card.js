import { createSlice, current } from '@reduxjs/toolkit';
import uniqId from 'uniqid';
import { randomRGBColor, generateRandomNumber, compareItems, hexToRgb } from '../../utils';

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
            newSortedArray.sort(compareItems);

            return { ...state, card: newSortedArray }
        },
        editItemNumber: (state, { payload }) => {
            const value = Number(payload.num);
            const data = [...current(state).card];
            const findItemIndex = data.findIndex(item => item.id === payload.id);
            const currentObj = { ...data[findItemIndex] };
            currentObj.num = value;
            data.splice(findItemIndex, 1, currentObj);

            return { state, card: data }
        },
        changeItemColor: (state, { payload }) => {
            const { index, bgColor } = payload;
            const newColor = hexToRgb(bgColor);
            const data = [...current(state).card];
            const currentObj = { ...data[index] };
            currentObj.bgColor = newColor;
            data.splice(index, 1, currentObj);

            return { state, card: data }
        },
        clearCard: () => initialState
    }
})

export const { addNewItem, deleteItem, sortCard, clearCard, editItemNumber, changeItemColor } = cardSlice.actions;
export default cardSlice.reducer
