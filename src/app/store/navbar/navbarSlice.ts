import {createSlice} from "@reduxjs/toolkit";

export interface NavbarState {
    activeTab: string
}

const initialState: NavbarState = {
    activeTab: "home"
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        switchTab: (state, action) => {
            console.log("Inside switchTab: action: ", action);
            state.activeTab = action.payload;
        }
    }
})

export const {switchTab} = navbarSlice.actions;
export default navbarSlice.reducer;