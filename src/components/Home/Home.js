import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import users from "../assets/image/user.png.crdownload";
import { FaImage, FaViadeo, FaVideo } from "react-icons/fa";
import PostModal from "../PostModal/PostModal";
import Footer from "../share/Footer/Footer";
import MoreFriends from "../MoreFriends/MoreFriends";
import axios from "axios";

const Home = () => {

     const [users,setUsers] = useState([]);

     useEffect(()=>{
      axios.get('https://alaponbook-server.vercel.app/users')
      .then(res=>{
        setUsers(res.data)

      })
      .catch(error =>{
        console.log("users can't find",error);
      })
     },[])
   console.log(users);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="card min-h-screen m-auto lg:w-3/4  bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center">
            <div>
              <div className="avatar mr-3">
                <div className="w-11 rounded-full   ring-offset-base-100 ring-offset-2">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="f" />
                  ) : (
                    <img src={users} alt="f" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-full w-full p-3 bg-slate-100">
                <label htmlFor="my-modal-3" className="p-3 cursor-pointer ">What's on your mind, {user?.displayName}</label>
              </div>
            </div>
            
          </div>
          <div className="flex gap-7 mt-5">
        
                <div className="flex items-center gap-2 font-bold">
                     <label htmlFor="my-modal-3" className="btn  btn-sm">Post here</label>
                </div>
                <label htmlFor="my-modal-3" className="flex cursor-pointer items-center gap-2 font-bold">
                    <FaVideo></FaVideo> <p>Live video</p>
                </label>
                <label htmlFor="my-modal-3" className="flex cursor-pointer items-center gap-2 font-bold">
                    <FaImage></FaImage> <p>Image/ video</p>
                </label>
               
            </div>
            <PostModal></PostModal>
        </div>
        <div className="divider"></div>
        <h1 className="text-2xl mb-16 ml-3 font-bold">People You May Know</h1>
     <div className="flex flex-wrap gap-4">
      {
        users.map(user=>  <MoreFriends user={user} key={user._id}></MoreFriends>)
      }
    
     </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
