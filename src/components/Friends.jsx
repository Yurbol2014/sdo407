import React from 'react';

const TableRow=()=>{
   return (<tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>);
}


const Friends = (props)=>{
   let users =props.functions();
   console.log(users);
   return <table className ="table">
   <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">Имя</th>
       <th scope="col">Фамилия</th>
       
     </tr>
   </thead>
   <tbody>
     </tbody>
   </table>
   
   
};



export default Friends;