import React from 'react';
import {MovieDetail}  from './Principal/MovieDetail';
import {Landing} from './Principal/Landing';
import {Route, Routes, Navigate} from 'react-router-dom';
import NavMovie from "./Principal/NavMovie"


export function App() {
  return  (
    <div>
   <NavMovie/>
     <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Landing/>}/>
        <Route path="/movies/:Id" element={<MovieDetail/>} />
     </Routes>
     </div>

  );
}







