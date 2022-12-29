import React from 'react';
import usr from '../assets/image/user.png.crdownload'

const MoreFriends = ({user}) => {

    return (
        <div>
          
            <div className="card w-48 ml-3 mb-5 bg-base-100 shadow-xl">
            <div className="avatar">
  <div className="w-32 m-auto rounded-full">
  {user?.photoURL ?   <img  alt='#' src={user?.photoURL} />:  <img  alt='#' src={usr} />}
  </div>
</div>
  <div className=" items-center text-center">
   {user?.name ?  <h2 className="text-2xl mb-2 font-bold text-center">{user?.name}</h2>: <h2 className="text-2xl mb-2 font-bold text-center">Unknown</h2>}
 
    <div className="">
      <button className="btn mx-2 mb-2 btn-sm w-3/4 btn-primary">Add Friends</button>
      <button className="btn mx-2  mb-2 btn-sm w-3/4 ">Remove Friends</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MoreFriends;