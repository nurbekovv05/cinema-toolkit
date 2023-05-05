import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {LanguageContext} from "../../Reducers/ActionCreators";
import {useAppSelector} from "../../hooks/useAppSelector";



interface IDark {
    dark: any
    isDarkMode: boolean
}
const Header = ({dark, isDarkMode}: IDark) => {
    const dispatch = useAppDispatch()
    const handleChane = (e: React.ChangeEvent<any>) => {
        dispatch(LanguageContext(e.target.value))
    }
    const {language} = useAppSelector(s  => s.actorSlice)
    console.log(language)


    return (
        <div className='bg-gray-900 fixed w-full z-50 top-0'>
            <div className='container'>
                <nav className=" border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex  items-center py-[30px]  mx-auto p-4">
                            <input className='ml-[100px] py-[5px] px-[20px] outline-none rounded text-gray-600' type="text" placeholder='search' />
                        <div className="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-[70px]">
                            <NavLink to={'/'} ><p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Popular</p></NavLink>
                            <NavLink to={'/TopRated'} ><p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Top Rated</p></NavLink>
                            <NavLink to={'/Upcoming'} ><p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Upcoming</p></NavLink>
                            <NavLink to={'/NowPlaying'} ><p className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Now Playing</p></NavLink>
                        </div>
                        <button className='bg-white ml-[70px] rounded px-5 py-2 text-gray-900' onClick={dark}>{isDarkMode ? ' Light Mode' : ' Dark Mode'}</button>
                        <div className='ml-6'>
                            <div>
                                <select onChange={e => handleChane(e)} className="bg-black/50">
                                    <option value="en-US">en</option>
                                    <option value="ru-RU">ru</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;