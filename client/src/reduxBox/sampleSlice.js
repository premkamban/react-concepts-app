import { createSlice } from '@reduxjs/toolkit'
const sampleSlice = createSlice({
    name: 'sample',
    initialState: {
        person: {
            family: '',
            members: 5,
            head: false,
        }
    },
    reducers: {
        validate: (state) => {
            state.person.head = true
        },
    }
});

export const { validate } = sampleSlice.actions;
export default sampleSlice.reducer;