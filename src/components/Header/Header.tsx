import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {LanguageContext} from "../../Reducers/ActionCreators";
import {useAppSelector} from "../../hooks/useAppSelector";
import logo from './../image/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'



interface IDark {
    dark: any
    isDarkMode: boolean
}
const Header = ({dark, isDarkMode}: IDark) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const [state, setState] = useState(false)
    const [search , setSearch] = useState(false)
    const navigate = useNavigate()
    const handleChane = (e: React.ChangeEvent<any>) => {
        dispatch(LanguageContext(e.target.value))
    }
    const {language} = useAppSelector(s  => s.actorSlice)


    const handleClick = (text: string) => {
        if (value.trim().length !== 0) {
            setState(true)
            navigate(`/movies/searchMovie/${text}`)
        }
        setValue("")
    }

    return (
        <div className='bg-gray-900 fixed w-full z-50 top-0'>
            <div className='container'>
                <nav className=" border-gray-200 dark:bg-gray-900">

                    <div className="max-w-screen-xl flex  items-center py-[30px]  mx-auto p-4">
                        <img className='w-[150px] cover' src={logo} alt=""/>
                        <div className="flex  items-baseline ml-[20px]">
                            <input value={value} type="search" onKeyDown={(e)=> {
                                switch (e.key){
                                    case 'Enter' :
                                        handleClick(value)
                                        break
                                }
                            }} onChange={(e) => {
                                setValue(e.target.value)
                                setState(false)
                            }} className={`${search ? "searchBlock" : "searchNone "} delay-300 transition-all block w-full p-3 pl-10 text-sm outline-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Search" required/>
                            <button onClick={() => {
                                setSearch(!search)
                                handleClick(value)
                            }} className="text-red-700 mx-3 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Search</button>
                        </div>
                        <div className="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-[50px]">
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