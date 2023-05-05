import {IMovie} from "../types/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ActorMovieSlice {
    actorM: IMovie[]
    loader: boolean
    error: string
}

const initialState: ActorMovieSlice = {
    actorM: [],
    loader: false,
    error: ''
}

export const actorMovieDetail = createSlice({
    name: 'actorMovie',
    initialState,
    reducers: {
        getActorMovie(state) {
            state.loader = true
        },
        getActorMovieSuccess(state, action: PayloadAction<IMovie[]>){
            state.loader = false
            state.error = ''
            state.actorM = action.payload
        },
        getActorMovieError(state, action: PayloadAction<string>){
            state.loader = false
            state.error = action.payload
            state.actorM = []
        }
    }
})

export const {getActorMovieError, getActorMovieSuccess, getActorMovie} = actorMovieDetail.actions

export default actorMovieDetail.reducer