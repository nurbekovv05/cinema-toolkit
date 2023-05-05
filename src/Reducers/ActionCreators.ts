import {AppDispatch} from "../store";
import {movieFetching, movieFetchingError, movieFetchingSuccess} from "./MovieSlice";
import axios from "axios";
import {Apikey} from "../Apikey/Apikey";
import {getDetailError, getDetailMovies, getDetailSuccess} from "./DetailSlice";
import {getActors, getActorsErr, getActorsSuccess, LanguageRec} from "./ActorSlice";
import {getDetailActor, getDetailActorError, getDetailActorSuccess} from "./ActorDetailSlice";
import {getActorMovie, getActorMovieError, getActorMovieSuccess} from "./ActorMovieSlice";


export const FetchingPopular = (a: number, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${lan}&page=${a}`)
            const {data} = await response
            dispatch(movieFetchingSuccess(data.results))
        } catch (err: any) {
            dispatch(movieFetchingError(err.message))
        }
    }
}

export const LanguageContext = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(LanguageRec(lan))
}

export const fetchingTopRated = (a: number, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Apikey}&language=${lan}&page=${a}`)
            const {data} = await response
            dispatch(movieFetchingSuccess(data.results))
        } catch (err: any) {
            dispatch(movieFetchingError(err.message))
        }
    }
}

export const fetchingUpcoming = (a: number, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const response = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Apikey}&language=${lan}&page=${a}`)

            const {data} = await response
            dispatch(movieFetchingSuccess(data.results))
        } catch (err: any) {
            dispatch(movieFetchingError(err.message))
        }
    }
}

export const fetchingNowPlaying = (a: number, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Apikey}&language=${lan}&page=${a}`)
            const {data} = await response
            dispatch(movieFetchingSuccess(data.results))
        } catch (err: any) {
            dispatch(movieFetchingError(err.message))
        }
    }
}

export const fetchMovie = (id: any, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getDetailMovies());
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${Apikey}&language=${lan}`
            );
            dispatch(getDetailSuccess(response.data));
        } catch (error: any) {
            dispatch(getDetailError(error.message));
        }
    };
}


export const fetchActors = (id: any, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getActors());
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Apikey}&language=${lan}`
            );
            dispatch(getActorsSuccess(response.data.cast));
        } catch (error: any) {
            dispatch(getActorsErr(error.message));
        }
    };
}


export const actorDetail = (id: any, lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getDetailActor())
            const response = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${Apikey}&language=${lan}`)
            dispatch(getDetailActorSuccess(response.data))
        } catch (error: any) {
            dispatch(getDetailActorError(error.message))
        }
    }
}

export const actorMovieDetail = (id: any) => {
    return async (dispatch: AppDispatch)=> {
        try {
            dispatch(getActorMovie())
            const response = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Apikey}&language=en-US`)
            dispatch(getActorMovieSuccess(response.data.cast))
        }catch (error: any) {
            dispatch(getActorMovieError(error.message))
        }
    }
}

