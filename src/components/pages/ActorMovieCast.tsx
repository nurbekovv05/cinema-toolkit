import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {actorMovieDetail} from "../../Reducers/ActionCreators";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

interface IActorDetail {
    actorId: any
}

const ActorMovieCast = ({actorId}: IActorDetail) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const dispatch = useAppDispatch()
    const {actorM, error, loader} = useAppSelector((state)=> state.actorMovieReducer)
    console.log(actorM)
    useEffect(()=> {
        dispatch(actorMovieDetail(actorId))
    }, [])
    return (
       <div className='bg-[#1d1d1d]'>
           <Slider {...settings}>
               {
                   actorM.map(el => (
                                   <NavLink to={`/movie/${el.id}`}>
                                       <img className='max-w-[150px]' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/> </NavLink>

                   ))
               }
           </Slider>
       </div>

    );
};

export default ActorMovieCast;