import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MovieReducer from "../Reducers/MovieSlice";
import detailPageSlice from "../Reducers/DetailSlice";
import actorSlice from "../Reducers/ActorSlice";
import actorDetailReducer from "../Reducers/ActorDetailSlice";
import actorMovieReducer from "../Reducers/ActorMovieSlice";
const rootReducer = combineReducers({
    MovieReducer,
    detailPageSlice,
    actorSlice,
    actorDetailReducer,
    actorMovieReducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']