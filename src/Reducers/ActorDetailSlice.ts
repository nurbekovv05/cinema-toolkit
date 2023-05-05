import {IActorDetail} from "../types/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IActorDetailSlice {
    actorD: Partial<IActorDetail>
    loader: boolean
    error: string
}

const initialState: IActorDetailSlice ={
    actorD: {},
    loader: false,
    error: ''
}

export const actorDetailSlice = createSlice({
    name: 'actorDetail',
    initialState,
    reducers: {
        getDetailActor(state) {
            state.loader = true
        },
        getDetailActorSuccess(state, action: PayloadAction<IActorDetail>){
            state.loader = false
            state.error = ''
            state.actorD = action.payload
        },
        getDetailActorError(state, action: PayloadAction<string>){
            state.loader = false
            state.error = action.payload
            state.actorD = {}
        }
    }
})

export const {getDetailActor, getDetailActorSuccess, getDetailActorError} = actorDetailSlice.actions

export default actorDetailSlice.reducer