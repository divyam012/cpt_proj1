import React from 'react';
import Home from './home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import {Route, Routes} from "react-router-dom" ;
import Search from '../components/Search';
function pages() {
  return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cuisine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
    </Routes>
  )
}

export default pages
