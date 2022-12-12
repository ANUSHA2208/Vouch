import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Clientlist } from '../pages/Clientlist';
import { Login } from '../pages/Login';
import {AddClient} from '../pages/AddClient'

const Router = () => {
  return (
    <div>
      
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/client-list' element={<Clientlist/>}/>
                <Route path='/add-client' element={<AddClient/>}/>
            </Routes>
    
    </div>
  )
}

export default Router