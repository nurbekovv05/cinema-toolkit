import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDetail} from "../types/IMovie";

interface IDetailMovies {
    detail: Partial<IDetail>,
    loader: boolean
    error: string
}

const initialState: IDetailMovies = {
    detail: {},
    loader: false,
    error: ''
}

export const detailPageSlice = createSlice({
    name: "detailPage",
    initialState,
    reducers: {
        getDetailMovies(state) {
            state.loader = true;
        },
        getDetailSuccess(state, action: PayloadAction<IDetail>) {
            state.loader = false;
            state.detail = action.payload;
            state.error = ''
        },
        getDetailError(state, action: PayloadAction<string>) {
            state.loader = false;
            state.error = action.payload;
        },
    },
});

export const {
    getDetailMovies,
    getDetailSuccess,
    getDetailError,
} = detailPageSlice.actions;

export default detailPageSlice.reducer;