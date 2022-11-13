import React from 'react';
import './App.css';
import { Route , Routes } from "react-router-dom";
import Home from './components/Home';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./components/Menu'),
  loading: Loading ,
});

export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<LoadableComponent />}/>
      </Routes>
    </div>
  );
}


