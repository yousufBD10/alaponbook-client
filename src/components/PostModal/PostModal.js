import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PostModal = () => {
  const navigate = useNavigate()
     const [loading,setLoading] = useState(false)
    const {user} = useContext(AuthContext);

    const {register,formState: { errors }, handleSubmit,} = useForm();

    const handlePost = (data)=>{
          setLoading(true)
       
        const message = data.message;
        
       const  d = new Date();
       const date = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes();
      //  console.log(date);
      const image = data.file[0];
    
       const formData = new FormData();
       formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API}`
      console.log(url);
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
        const image = imgData.data.url
          if(imgData.success){
                 console.log(image,message);
               setLoading(false)
                
               const postData ={
                photo : image,
                text : message,
                like: 0,
                post_date: date,
                user_name: user?.displayName,
                user_photo: user?.photoURL,
                user_uid: user?.uid,
               }

               fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json', 
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(postData)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
                toast.success(`Your posts share done successfully`);
                navigate('/media')
            })
            
             
          }
          else{
               setLoading(false)
          }
      });
      

    }
    return (
        <div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <form onSubmit={handleSubmit(handlePost)}  className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
   <div className='flex items-center gap-3 mb-6'>
   <div className="avatar mr-3">
                <div className="w-11 rounded-full   ring-offset-base-100 ring-offset-2">
                  {user?.photoURL && (
                    <img src={user?.photoURL} alt="f" />
                  ) }
                </div>
              </div>
              <div>
                {user?.uid && <p className='font-bold'>{user?.displayName} </p>}
              </div>
   </div>
   <div className="divider"></div>
   <label className="label">
    <span className="label-text font-bold">Choice your photo</span>
   
  </label>
   <input {...register("file", { required: true })} name='file' type="file" className="file-input w-full max-w-xs" />
   <textarea {...register("message", { required: true })} name='message' className="textarea border-gray-200 my-6 w-full h-24" placeholder="What's on your mind," ></textarea>
  {loading? <div class="text-center btn btn-primary w-full">
    <div role="status">
        <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div> : <button type='submit' className='btn w-full btn-primary'>Post</button>}
  </form>
</div>
        </div>
    );
};

export default PostModal;