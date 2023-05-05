import React, {useEffect, useState} from 'react';
import MoviePopular from "./components/pages/MoviePopular";
import {Route, Routes} from "react-router-dom";
import TopRated from "./components/pages/TopRated";
import NowPlaying from "./components/pages/NowPlaying";
import Upcoming from "./components/pages/Upcoming";
import Header from "./components/Header/Header";
import DetailPage from "./components/pages/DetailPage";
import ActorDetail from "./components/pages/ActorDetail";
import {useAppSelector} from "./hooks/useAppSelector";
import axios from "axios";
import {request} from "https";
function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const dark = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <div className="App">
            <div >
                <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
                    <Header dark={dark} isDarkMode={isDarkMode}/>
                    <Routes>
                        <Route path={'/'} element={<MoviePopular/>}/>
                        <Route path={'/TopRated'} element={<TopRated/>}/>
                        <Route path={'/NowPlaying'} element={<NowPlaying/>}/>
                        <Route path={'/Upcoming'} element={<Upcoming/>}/>
                        <Route path={'/movie/:movieId'} element={<DetailPage/>}/>
                        <Route path={'/actorDetail/:actorId'} element={<ActorDetail/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default App;
