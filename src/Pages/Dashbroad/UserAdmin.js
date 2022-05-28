import React, { useEffect, useState } from 'react';

const UserAdmin = (user) => {

  const [admin,setAdmin] = useState(false);
   const [makeAdmin ,setMakeAdmin] = useState(true);
   useEffect( () =>{
    const email = user?.email;
    if(email){
        fetch(`https://safe-anchorage-57552.herokuapp.com/admin/${email}`,{
            method:'GET',
            headers:{
                'content-type' : 'application.json',
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            },
           
         })
         .then(res=>res.json())
         .then(data => {
             
             setAdmin(data.admin);
             setMakeAdmin(false);
         })
    }
   },[user])
  }

export default UserAdmin;