import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import users from "../assets/image/user.png.crdownload";
import { FaHome, FaImage, FaPen, FaSearchLocation } from "react-icons/fa";
import EditeProfile from "./EditeProfile";
import { MdCastForEducation,MdLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const AboutPage = () => {
  const { user } = useContext(AuthContext);
  const [modal,setModal] = useState(true);
  const [refetch ,setRefetch] = useState(false);
  const [update ,setUpdate] = useState({});
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/updateprofile?email=${user?.email}`)
    .then(res => {
     
   setUpdate(res.data)
    })
    .catch(error => {
      console.log("axios error for ", error)
  })
},[user?.email,refetch])

//    const {data :update =[],isLoading ,refetch} = useQuery({
   
      
//     queryKey:[user?.email],
//     queryFn:async()=>{
//         const res = await fetch(`http://localhost:5000/updateprofile?email=${user?.email}`);
//         const data = await res.json();
//         return data;
//       }
//     })
    console.log(update);
  return (
    <div className="px-6 lg:w-3/4 m-auto mt-8">
      <div className="lg:flex justify-between">
        <div className="flex  gap-5">
          <div className="avatar mr-3">
            <div className="w-48 rounded-full   ring-offset-base-100 ring-offset-2">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="f" />
              ) : (
                <img src={users} alt="f" />
              )}
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-5">{user?.displayName}</h1>
        </div>

        <div className="flex -mt-4 pt-32  ">
            <button className="flex items-center gap-2 btn btn-primary">Add a posts <FaImage></FaImage></button>
          
            <label  htmlFor="my-modal-4"  className="flex items-center gap-2 btn btn-ghost">Edit profile <FaPen></FaPen></label>
        </div>
      </div>
      {modal &&   <EditeProfile setRefetch={setRefetch} setModal={setModal}></EditeProfile>}
       
      <div className="divider"></div>

      <div>
         <h1 className="text-3xl font-bold my-6">About</h1>
         <h1 className="text-xl flex items-center gap-3 font-bold my-6"><MdCastForEducation></MdCastForEducation> Former {update.workplace} </h1>
         <h1 className="text-xl flex items-center gap-3 font-bold my-6"><FaGraduationCap></FaGraduationCap> Studies at {update.univerty}  </h1>
         <h1 className="text-xl flex items-center gap-3 font-bold my-6"><FaHome></FaHome> Live at {update.address} </h1>
         <h1 className="text-xl flex items-center gap-3 font-bold my-6"><MdLocationOn></MdLocationOn> From at {update.come} </h1>
       
         <h1 className="text-xl flex items-center gap-3 font-bold my-6"><GiLovers></GiLovers> Relationship {update.relationship} </h1>

      </div>
    </div>
  );
};

export default AboutPage;
