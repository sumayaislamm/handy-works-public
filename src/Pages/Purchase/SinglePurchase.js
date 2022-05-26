import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const SinglePurchase = ({ modal, setModal }) => {
  const {_id, name, price} = modal;
  const [user, loading, error] = useAuthState(auth);
  const handleModal = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    console.log(_id, name);
    const model ={
      modalId: _id,
      modal:name,
      personName: user.displayName,
      person: user.email,
      phone: event.target.phone.value,
      address: event.target.address.value
    }

    fetch('http://localhost:5000/model',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(modal)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.success){
        toast(`Your Order Confirm as ${user?.displayName}`)
      }else{
        toast.error(`Your Have Previous Order as ${user?.displayName}`)
      }
      setModal(null);
    })

    
  }
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">NAME: {name}</h3>
          <p className="py-4">price={price}</p>
          <form 
          onSubmit={handleModal}
          className="grid grid-cols-1 gap-3 justify-items-center">
            
            <input
              type="text" name="name"
              disabled value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled value={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              type="text"
              placeholder="Address"
              name="address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePurchase;
