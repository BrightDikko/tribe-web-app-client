import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AuthService from "../../services/authService";
import {UserInfo} from "../../types/user";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

export interface AuthState {
    isAuthenticated: boolean;
    user: typeof user | null;
}

const initialState: AuthState = user ?
    {
        isAuthenticated: true,
        user,
    } :
    {
        isAuthenticated: false,
        user: null
    };

export const register = createAsyncThunk(
    "auth/register",
    async (request: UserInfo, thunkAPI) => {
        try {
            const response = await AuthService.register(request);
            return response.data;
        } catch (error) {
            console.error("An error occurred during registration: ", error);
            return thunkAPI.rejectWithValue("Error");
        }
    });


export const login = createAsyncThunk(
    "auth/login",
    async (request: UserInfo, thunkAPI) => {
        try {
            const data = await AuthService.login(request);
            return {user: data};
        } catch (error) {
            console.error("An error occurred during login: ", error);
            return thunkAPI.rejectWithValue("Error");
        }
    })

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        await AuthService.logout();
    });

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
        });
        builder.addCase(login.rejected, (state) => {
            state.isAuthenticated = false;
            state.user = null;
        });
        builder.addCase(register.fulfilled, (state) => {
            state.isAuthenticated = false;
        });
        builder.addCase(register.rejected, (state) => {
            state.isAuthenticated = false;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.user = null;
        });
    }
})

export default authSlice.reducer;