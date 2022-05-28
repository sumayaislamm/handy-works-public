import { useEffect, useState } from "react"

const useToken = user =>{
  const [token, setToken] = useState('');
  useEffect( () =>{
    const email = user?.user?.email;
    const currentUser = {email: email};
    
    if(email){
      const url = `https://safe-anchorage-57552.herokuapp.com/user/${email}`
      console.log(email);
      fetch(url,{
         method: 'PUT',
         headers: {
           'content-type': 'application/json'
         },
         body:JSON.stringify(currentUser)
      })
      .then(res=> res.json())
      .then(data =>{
        console.log('data inside token', data);
        const accesstoken = data.accessToken;
        localStorage.setItem('accessToken', accesstoken);
        setToken(accesstoken);
        console.log(accesstoken);
      })
    }

  },[user]);
  return [token];
}

export default useToken;