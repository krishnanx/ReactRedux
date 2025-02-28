import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpNewUser } from "../Functions/SupaAuth";

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        data: [],
        status: "none"
    },
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.data = action.payload;
            if (action.payload.success) {
                state.status = "idle";
            }
            else {
                state.status = "error";
            }
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.data = action.payload;
            state.status = "error";
        })

    }
})
export const { addUser } = AuthSlice.actions;
export default AuthSlice.reducer;
export const signUpUser = createAsyncThunk("auth/signUp", async ({ email, password }) => {
    console.log(email, password)
    try {
        const response = await SignUpNewUser(email, password);
        return response; // Return response data to update Redux state
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});