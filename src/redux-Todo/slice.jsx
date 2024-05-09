import { createSlice } from "@reduxjs/toolkit";
// import { handleChange, handleSubmit, setInputValue } from "../reduxTodo/slice";

export const slice = createSlice({
    name: "Todoslice",
    initialState: {
        value: "",
        tasks: [],
    },
    reducers: {
        setInputValue: function(){},
        handleSubmit : function(state, action){
            state.tasks = [...state.tasks, state.value];
        },
        handleChange: function(state, action){
            state.value = action.payload;
        }
    }
})

export const {setInputValue, handleChange, handleSubmit} = slice.actions;
const sliceReducer = slice.reducer;
export default sliceReducer;