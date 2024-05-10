import { createSlice } from "@reduxjs/toolkit";
// import { handleChange, handleSubmit, setInputValue } from "../reduxTodo/slice";

export const slice = createSlice({
    name: "Todoslice",
    initialState: {
        value: "",
        tasks: [],
    },
    reducers: {
        setInputValue: function () { },
        handleSubmit: function (state, action) {
            state.tasks = [...state.tasks, state.value];
            state.value = ""
        },
        handleChange: function (state, action) {
            state.value = action.payload;
        },
        handleDelete: function (state, action) {
            state.tasks = state.tasks.filter((task, ind) => { return ind !== action.payload })
        },
        handleEdit: function (state, action){
            const {index, newValue} = action.payload;
            state.tasks[index] = newValue
        }
    }
})

export const { setInputValue, handleChange, handleSubmit, handleDelete, handleEdit } = slice.actions;
const sliceReducer = slice.reducer;
export default sliceReducer;