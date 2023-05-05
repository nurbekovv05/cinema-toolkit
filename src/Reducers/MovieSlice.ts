import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../types/IMovie";

export interface IMovieState {
    movie: IMovie[]
    loading: boolean
    error: string
}


const initialState: IMovieState = {
    movie: [],
    loading: false,
    error: ''
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        movieFetching(state){
            state.loading = true
        },
        movieFetchingSuccess(state, action: PayloadAction<IMovie[]>){
            state.loading = false
            state.movie = action.payload
            state.error = ''
        },
        movieFetchingError(state, action:  PayloadAction<string>){
            state.loading = false
            state.movie = []
            state.error = action.payload
        }
    }
})

export const {movieFetching, movieFetchingError, movieFetchingSuccess} = movieSlice.actions
export default movieSlice.reducer