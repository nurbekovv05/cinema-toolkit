
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import React, {useEffect} from "react";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchActors, fetchMovie} from "../../Reducers/ActionCreators";
import Cast from "./Cast";

const DetailPage = () => {

    const dispatch = useAppDispatch();
    const {movieId} = useParams()
    useEffect(() => {
        dispatch(fetchMovie(movieId , language ))
        dispatch(fetchActors(movieId , language))
    }, [movieId, ])

    const {loader, detail, error} = useAppSelector((state) => state.detailPageSlice);
    const {actors} = useAppSelector((state) => state.actorSlice);
    const {language} = useAppSelector((state)=> state.actorSlice)
    console.log(detail)
    return (
        <div className='mt-[100px]'>
            <div id='detail-card' className='relative' style={{
                background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}') no-repeat left/cover`, height: '550px', objectFit: 'contain'
            }}>
            </div>
            <div className='absolute top-[130px]'>
                <div className='detail-card'>
                    <img className='images' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}`} alt=""/>
                    <div className="detail-card--description">
                        {loader && <p>loading..</p>}
                        {error && <p>Err..</p>}
                        <h1 className='text-white text-4xl mb-[30px] '>{detail.title}</h1>
                        <p className='text-white w-[500px] mb-[5    0px]'>{detail.overview}</p>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.profile_path}`} alt=""/>

                    </div>
                </div>
            </div>
            <Cast actors={actors} />
        </div>
    );
};
export default DetailPage;
