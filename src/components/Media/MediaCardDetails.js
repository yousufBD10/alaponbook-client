import React, { useContext } from "react";
import users from "../assets/image/user.png.crdownload";
import { RiEarthFill } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaArrowCircleRight, FaComment } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MediaCardDetails = () => {
    const post = useLoaderData();
    const {_id,photo,text,like,post_date,user_name,user_photo,user_uid} = post;
  const { user } = useContext(AuthContext);
  return (
    <div className="lg:w-3/4 m-auto mt-6">
        this is details pages{post.length}
      <div className="card lg:w-3/4 m-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex gap-4">
            <div className="avatar mr-3">
              <div className="w-11 rounded-full   ring-offset-base-100 ring-offset-2">
                {user_photo ? (
                  <img src={user_photo} alt="f" />
                ) : (
                  <img src={users} alt="f" />
                )}
              </div>
            </div>
            <div>
              <p className="font-bold">{user_name}</p>
              <p className="flex items-center gap-2">
                {post_date} <RiEarthFill></RiEarthFill>
              </p>
            </div>
          </div>

          <p>{text}</p>
        </div>
        <figure>
          <img className="w-full" src={photo} alt="Shoes" />
        </figure>
        <div className="flex justify-between px-3 mt-3">
          <div>
            <p className="flex items-center gap-2">
              {" "}
              <SlLike></SlLike>
              {like}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <FaComment></FaComment> Comments
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="flex justify-evenly mb-3">
          <div>
            <button className="flex items-center gap-2">
              {" "}
              <SlLike></SlLike>Like
            </button>
          </div>
          <div>
            <button className="flex items-center gap-2 ">
              <FaComment></FaComment> Comments
            </button>
          </div>
          <div>
            <button className="flex border p-2 rounded-full bg-slate-100 hover:bg-slate-300 items-center gap-2">
              More details<FaArrowCircleRight></FaArrowCircleRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCardDetails;
