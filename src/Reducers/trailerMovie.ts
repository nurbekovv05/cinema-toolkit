import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IVideo} from "../types/IMovie";

interface VideoSlice {
    video: IVideo[]
    loading: boolean
    error: string
}

const initialState: VideoSlice = {
    video: [],
    loading: false, error: ''
}
export const VideoSlice = createSlice({
    name: 'video',
    initialState, reducers: {
        getVideo(state, action: PayloadAction<any>) {
            state.loading = true
        }, getVideoSuccess(state, action: PayloadAction<IVideo[]>) {
            state.loading = false;
            state.video = action.payload;
            state.error = ''
        },
        getVideoError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.video = []
            state.error = action.payload
        }
    }
})
export const {getVideo, getVideoSuccess, getVideoError} = VideoSlice.actions
export default VideoSlice.reducer