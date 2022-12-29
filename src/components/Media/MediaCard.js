import React, { useContext, useState } from "react";
import users from "../assets/image/user.png.crdownload";
import { RiEarthFill } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaArrowCircleRight, FaComment } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MediaCard = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { _id, photo, text, like, post_date, user_name, user_photo, user_uid } =
  post;
  const [counter, setCounter] = useState(like);
    const likeData = {
      counter,_id
    }
        const newText = text.slice(0,300)
    
  const newDate = post_date?.slice(0, 10);

  const {
    data: comments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [_id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments/${_id}`);
      const data = await res.json();
      return data;
    },
  });
  console.log(comments);

  const handleLike = ()=>{
    setCounter(like => like + 1);
  }

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comments = e.target.comment.value;
    const d = new Date();
    const date =
      d.getDate() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes();
    const postData = {
      comments,
      post_id: _id,
      user_name: user?.displayName,
      user_photo: user?.photoURL,
      post_date: date,
    };
    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          form.reset();
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

 

  fetch(`http://localhost:5000/like`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(likeData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
         refetch();
        //  setCounter(like)
      }
      console.log(data);
    })
    .catch((err) => console.error(err));

  return (
    <div className="lg:w-3/4 m-auto mt-6">
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
                {newDate} <RiEarthFill></RiEarthFill>
              </p>
            </div>
          </div>

          <p>{
        
        newText
          
          }...</p>
        </div>
        <figure>
          <img className="w-full" src={photo} alt="Shoes" />
        </figure>
        <div className="flex justify-between px-3 mt-3">
          <div>
            <p className="flex items-center gap-2">
              {" "}
              <SlLike></SlLike>
              {counter}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <FaComment></FaComment> Comments {comments.length}
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="flex justify-evenly mb-3">
          <div>
            <button onClick={handleLike} className="flex items-center gap-2">
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
            <Link to={`/mediadetails/${_id}`}>
              {" "}
              <button className="flex border p-2 rounded-full bg-slate-100 hover:bg-slate-300 items-center gap-2">
                More details<FaArrowCircleRight></FaArrowCircleRight>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex ml-3  items-center gap-3">
          <div className="avatar  mr-3">
            <div className="w-11 rounded-full   ring-offset-base-100 ring-offset-2">
              {user?.uid ? (
                <img src={user?.photoURL} alt="f" />
              ) : (
                <img src={users} alt="f" />
              )}
            </div>
          </div>
          <form onSubmit={handleComment} className="flex w-3/4">
            <input
              name="comment"
              required
              type="text "
              placeholder="Comments here"
              className="input rounded-full border-gray-200 w-full"
            />
            <button type="submit" className="btn btn-ghost">
              Comments
            </button>
          </form>
        </div>

        {comments.map((cmt) => (
          <div className="px-9 mt-6">
            <div className="flex items-center gap-2">
              <div className="avatar mr-3">
                <div className="w-9 rounded-full   ring-offset-base-100 ring-offset-2">
                  {cmt.user_photo ? (
                    <img src={cmt.user_photo} alt="f" />
                  ) : (
                    <img src={users} alt="f" />
                  )}
                </div>
              </div>
              <p className="font-bold">{cmt.user_name}</p>
            </div>

            <p className="lg:ml-14 bg-slate-50 rounded-lg p-4 lg:pr-36 mb-3 w-3/4">{cmt.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCard;
