import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Profile from "./components/Profile"
import './App.css';


const Messages = ()=>{
   return <h2>Эта   страница с сообщениями</h2>
   
   
};
const Settings = ()=>{
   return <h2>Эта   страница с настройками</h2>
   
   
};
const Friends = ()=>{
   return <h2>Друзья</h2>
   
   
};
const Menu = () =>{
   return(
   <div>
   <div className="row">
     <div className="col-sm-3">
       <div className="nav flex-column nav-pills"aria-orientation="vertical">
         <NavLink className="nav-link " to = "profile" >Профиль</NavLink>
         <NavLink className="nav-link" to = "messages">Сообщение</NavLink>
         <NavLink className="nav-link" to = "settings">Настройки</NavLink>
         <NavLink className="nav-link" to = "friends" >Друзья</NavLink>
       </div>
     </div>
     </div>
     </div>
     );

};

function App() {
  return (
   <div className="container-fluid">
   <BrowserRouter>
      <div className="row">

      
      <div className="col-sm-3">
      <Menu/>
      </div>

   <div className='col-sm-9'>
   
   <Route path = '/profile' component={Profile} />
   <Route path = '/messages' component={Messages} />
   <Route path = '/settings' component={Settings} />
   <Route path = '/friends' component={Friends} />
   </div>
   </div>
   </BrowserRouter>
   </div>


  );
}

export default App;