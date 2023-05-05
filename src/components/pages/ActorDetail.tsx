import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useParams} from "react-router-dom";
import {actorDetail} from "../../Reducers/ActionCreators";
import {useAppSelector} from "../../hooks/useAppSelector";
import ActorMovieCast from "./ActorMovieCast";

const ActorDetail = () => {
    const [viewMore, setViewMore] = useState(400)
    const dispatch = useAppDispatch()
    const {actorId} = useParams()
    const toggleViewMore = (text: any) => {
        setViewMore(viewMore === 400 ? text.length : 400)
    }
    useEffect(()=> {
        dispatch(actorDetail(actorId, language))
    }, [actorId, ])

    const {actorD, error, loader} = useAppSelector((state)=> state.actorDetailReducer)
    const {language} = useAppSelector((state)=> state.actorSlice)

    return (
        <div className='h-[100vh]'>
            <div className='mt-[70px]'>
                <div className="flex  justify-around pt-[100px]">
                <div><img className='w-[300px]' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actorD.profile_path}`} alt=""/>
                </div>
                <div className="w-[700px]">
                    <h1 className='text-4xl'>{actorD.name}</h1>
                    <h3 className='text-2xl mt-[20px]'>{actorD.place_of_birth}</h3>
                    <p className='text-l mt-[20px]'>{actorD.biography ? actorD.biography.slice(0, viewMore) : actorD.biography}</p>
                    {
                        actorD.biography ? actorD.biography.length >= 400 ? <span onClick={() => toggleViewMore(actorD.biography)} style={{
                            color: "green",
                            cursor: "grab"
                        }}>{viewMore === 400 ? "Читать дальше..." : "Свернуть"}</span> : "" : ""}
                </div>
            </div>

            </div>
            <div>
                <ActorMovieCast actorId={actorId}/>
            </div>
        </div>
    );
};

export default ActorDetail;