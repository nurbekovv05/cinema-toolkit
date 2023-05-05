import React from 'react';
import {IActors} from "../../types/IMovie";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";
import person from "../image/images.png"



interface IProps {
    actors: IActors[]
}


const Cast = ({actors}: IProps) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
           <Slider {...settings}>
               {
                   actors.map(el => (
                       <div>
                           {
                               el.profile_path ?
                                   <NavLink to={`/actorDetail/${el.id}`}> <img className='px-1 py-2 w-[150px]' src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt=""/> </NavLink> :
                                   <img className='w-[150px] h-[180px] mt-2' src={person} alt=""/>
                           }
                       </div>
                   ))
               }
           </Slider>

        </div>
    );
};

export default Cast;