import {useAppSelector} from "../../hooks/useAppSelector";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {VideoSlice} from "../../Reducers/ActionCreators";

interface IVideoId {
    movieId: string | undefined
}

const Video = ({movieId}: IVideoId) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(VideoSlice(movieId,))
    }, [])
    const {video} = useAppSelector((state) => state.VideoSlice)
    console.log(video)

    return (
        <div className='flex  bg-green-200 py-20'>            {
            video.slice(0, 4).map(el => (<div>
                    <iframe className='mx-4' width="300" height="200" src={`https://www.youtube.com/embed/${el.key}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            ))}
        </div>);
};
export default Video;