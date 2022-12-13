import React from 'react'
import {Routes,Route} from "react-router-dom";
import { Clientlist } from '../pages/Clientlist';
import { Login } from '../pages/Login';
import {AddClient} from '../pages/AddClient'
import { SideNav } from '../components/SideNav';

const Router = () => {
  return (
    <div>
      
            <Routes>
                <Route path='/' element={<Login/>} />

                <Route path="/client" element={<SideNav/>}>
                  
                <Route index  element={<Clientlist/>}/>
                <Route path='client-list' element={<Clientlist/>}/>
                <Route path='add-client' element={<AddClient/>}/>
                </Route>
            </Routes>
    
    </div>
  )
}

export default Router