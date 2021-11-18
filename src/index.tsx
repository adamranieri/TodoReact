import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreationPage from './components/creation-page';
import { DetailViewPage } from './components/detail-view-page';
import HomePage from './components/home-page';
import NavBar from './components/navbar';
import {store} from './store'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    <NavBar></NavBar>

    <Routes>
      <Route path="home" element={<HomePage/>} />

      <Route path="details" >
        <Route path=":id" element={<DetailViewPage/>}/>
      </Route>

      <Route path="creation" element={<CreationPage/>}/>

      <Route path="" element={<HomePage/>} />

      


    </Routes>
    
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
