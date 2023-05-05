import {IActors, IDetail} from "../types/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IActorSlice {
    actors: IActors[]
    loader: boolean
    error: string
    language: string
}
const initialState: IActorSlice = {
    actors: [],
    loader: false,
    error: '',
    language: "en-US"
}

export const actorSlice = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        getActors(state) {
            state.loader = true;
        },
        getActorsSuccess(state, action: PayloadAction<IActors[]>) {
            state.loader = false;
            state.actors = action.payload;
            state.error = ''
        },
        getActorsErr(state, action: PayloadAction<string>) {
            state.loader = false;
            state.actors = []
            state.error = action.payload;
        },
        LanguageRec(state, action: PayloadAction<string>) {
            state.language = action.payload
        }
    }
})

export default actorSlice.reducer
export const {getActors, getActorsSuccess, getActorsErr, LanguageRec} = actorSlice.actions