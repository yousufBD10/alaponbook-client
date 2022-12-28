import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const EditeProfile = ({setModal,setRefetch}) => {
    const {user} = useContext(AuthContext);

    const handleEdit = (e)=>{
        setRefetch(false)
         e.preventDefault();
         const form = e.target;
         const email = user?.email;
         const name = form.name.value;
         const workplace = form.workplace.value;
         const univerty = form.univerty.value;
         const address = form.address.value;
         const come = form.come.value;
         const relationship = form.relationship.value;
         const updateData = {name,workplace,univerty,email,address,come,relationship};
         fetch(`http://localhost:5000/update/${user?.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                // refetch();
                form.reset();
                setModal(null);
                setRefetch(true)
              }
              console.log(data);
            })
            .catch((err) => console.error(err));
    }
    return (
        <div>
        {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<div className="modal">
<form  onSubmit={handleEdit} className="modal-box relative">
<label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
<div className='flex items-center gap-3 mb-6'>
<h1 className="text-3xl">Edit profile</h1>
</div>
<div className="divider"></div>
   <div>
   <div className="form-control w-full mb-5">
  <label className="label">
    <span className="label-text">Your name</span>
   
  </label>
  <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
  
</div>
   
   <div className="form-control w-full mb-5">
  <label className="label">
    <span className="label-text">Work place</span>
   
  </label>
  <input name='workplace' type="text" placeholder="Your Name" className="input input-bordered w-full " />
  
</div>
   <div className="form-control w-full mb-5">
  <label className="label">
    <span className="label-text">College or Univerty</span>
   
  </label>
  <input name='univerty' type="text" placeholder="Your Name" className="input input-bordered w-full " />
  
</div>
   <div className="form-control w-full mb-5">
  <label className="label">
    <span className="label-text">Your home address</span>
   
  </label>
  <input name='address' type="text" placeholder="Your Name" className="input input-bordered w-full " />
  
</div>
   <div className="form-control w-full mb-5">
  <label className="label">
    <span className="label-text">Come frome</span>
   
  </label>
  <input name='come' type="text" placeholder="Your Name" className="input input-bordered w-full " />
  
</div>
   <div className="form-control w-full mb-5">
  <label className="label">
    <span className="label-text">Relationship</span>
   
  </label>
  <input name='relationship' type="text" placeholder="Your Name" className="input input-bordered w-full " />
  
</div>
   </div>
   <button type='submit' className="btn btn-primary w-full">Update</button>

</form>
</div>
    </div>
    );
};

export default EditeProfile;