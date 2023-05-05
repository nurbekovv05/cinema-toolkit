import React, {useContext, useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {FetchingPopular} from "../../Reducers/ActionCreators";


const MoviePopular = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const pages = [];
    for (let i = 1; i <= 10; i++)
        pages.push(i)
    const detailsFilm = (el: any) => {
        setCurrentPage(el)
    }
    const {detail} = useAppSelector(s => s.detailPageSlice)
    const {movie, error, loading} = useAppSelector((state) => state.MovieReducer)
    const {language} = useAppSelector(s => s.actorSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(FetchingPopular(currentPage, language))
    }, [currentPage, language])



    return (
        <>
            <div className="w-full h-full fixed left-0 top-0 z-10"
                style={{
                    background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}') no-repeat left/cover`,
                    objectFit: 'contain'
                }}
            ></div>
            <div className='pt-[40px] z-20 relative '>
                <h1 className='text-center text-3xl mb-[50px]'>Popular Movies</h1>
                <div className='container'>
                    <div className='items-center flex-wrap flex bg-black/50 justify-center'>
                        {error && <p>{error}</p>}
                        {loading && <p>loading...</p>}
                        {
                            movie.map(el => (
                                <div className=''>
                                    <div className='w-[250px] h-[470px] my-[20px] mx-[10px] border-2 border-blue-800'>
                                        <NavLink to={`/movie/${el.id}`}>
                                            <img className='ml-3 mt-[15px] cursor-pointer'
                                                 src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                                 alt=""/>
                                            <div className='w-[200px] ml-[16px] mt-[5px]'>
                                                <h1 className='text-xl'>{el.title}</h1>
                                                <p>{el.release_date}</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="flex my-9 items-center justify-center">
                            <ul className="inline-flex -space-x-px">
                                {
                                    pages.map((el) => (
                                        <li key={el}>
                                            <button
                                                onClick={() => detailsFilm(el)}
                                                className={el === currentPage ? "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 bg-gray-100 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" :
                                                    "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{el}</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default MoviePopular;