import React from 'react';

const Profile = (props)=>{
   
   let userId = window.location.pathname.split("/")[2];
	let user = props.function(userId);
	//console.log(userId);
  console.log(userId);
   return (<div className="row">
      <div className="col-sm-3">
         <img src={user.avatar} alt=""width="100%" />
      </div>
      <div className="col-sm-9">
         <h1>{user.name} {user.lastname}</h1>
         <h3> {user.about}</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis nostrum praesentium, eaque veniam aspernatur numquam accusantium error pariatur blanditiis officiis architecto beatae repudiandae minus vel dolorem ipsum id. Laboriosam.z</p>
      </div>
   </div>);

};

export default Profile;