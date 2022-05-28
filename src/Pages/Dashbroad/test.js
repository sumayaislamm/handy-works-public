// useEffect(() => {
//   if (user) {
//     const url = `http://localhost:5000/model/${user?.email}`;
//     fetch(url, {
//       method: 'GET',
//       headers:{
//         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//       }
//     })
//       .then(res => {
//         console.log('res', res);
//         // if(res.status === 401 || res.status === 403){
//         //      navigate('/')
//         // }
//        return res.json()
//       })
//       .then(data => {
//         setOrders(data);
//       });
//   }
// }, [user, navigate]);