import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const Profile = ()=>{
   return <h1>Эта страница с настройками</h1>;
}

function App() {
  return (
<div className="container-fluid">
<div className="row">
  <div className="col-sm-3">
    <div className="nav flex-column nav-pills">
      <a className="nav-link active" href = "profile" >Профиль</a>
      <a className="nav-link" href = "messages">Сообщение</a>
      <a className="nav-link" href = "settings">Настройки</a>
      <a className="nav-link" href = "friends" >Друзья</a>
    </div>
  </div>
   <div className="col-sm-9">
   <BrowserRouter>
   <Route path = "/profile" соmponent={Profile} />
   </BrowserRouter>
   </div>
</div>
</div>
  );
}

export default App;
