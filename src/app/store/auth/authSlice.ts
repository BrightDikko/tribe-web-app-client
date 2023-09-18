import {createSlice} from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated: boolean;
    authType: string;
    userInfo: {
        fullName: string;
        schoolName: string;
        email: string;
        password: string;
    };
}

const initialState: AuthState = {
    isAuthenticated: false,
    authType: "",
    userInfo: {
        fullName: "",
        schoolName: "",
        email: "",
        password: "",
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logInUser: (state, action) => {
            state.userInfo = {
                ...state.userInfo,
                ...action.payload
            };

            state.isAuthenticated = true;
        },

        signUpUser: (state, action) => {
            state.userInfo = {
                ...state.userInfo,
                ...action.payload
            };

            state.isAuthenticated = true;
        }
    }
})

export const {logInUser, signUpUser} = authSlice.actions;
export default authSlice.reducer;