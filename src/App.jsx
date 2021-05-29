import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Profile from "./components/Profile"
import './App.css';
import Friends from "./components/Friends"

const Messages = ()=>{
   return <h2>Эта   страница с сообщениями</h2>
   
   
};
const Settings = ()=>{
   return <h2>Эта   страница с настройками</h2>
   
   
};

const Menu = () =>{
   return(
   <div>
   <div className="row">
     <div className="col-sm-3">
       <div className="nav flex-column nav-pills"aria-orientation="vertical">
         <NavLink className="nav-link " to = "/profile" >Профиль</NavLink>
         <NavLink className="nav-link" to = "/messages">Сообщение</NavLink>
         <NavLink className="nav-link" to = "/settings">Настройки</NavLink>
         <NavLink className="nav-link" to = "/friends" >Друзья</NavLink>
       </div>
     </div>
     </div>
     </div>
     );

};

function App(props) {
   //console.log(props);
  return (
   <div className="container-fluid">
   <BrowserRouter>
      <div className="row">

      
      <div className="col-sm-3">
      <Menu/>
      </div>

   <div className='col-sm-9'>
   
   <Route path = '/profile' render={()=><Profile function={props.functions.key_getUser}/>} />
   <Route path = '/messages' component={Messages} />
   <Route path = '/settings' component={Settings} />
   <Route path = '/friends' render={()=><Friends function={props.functions.key_getUsers}/>} />
   </div>
   </div>
   </BrowserRouter>
   </div>


  );
}

export default App;