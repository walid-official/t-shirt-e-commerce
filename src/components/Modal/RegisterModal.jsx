import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const RegisterModal = () => {
  const {createUser} = useContext(authContext);


  const handleSignUp = (e) => {

    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(name,email,photo,password);

    createUser(email,password)
    .then(result => {
      console.log(result.user);
      e.target.reset();
    })
    .catch((error) => {
      console.log(error.message);
    })


  }

  return (
    <div>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal">
          <div className="w-11/12 max-w-5xl">
            <div className="hero bg-base-200 p-10">
              <div className="p-2 flex gap-8 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Register now!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
                <div className="bg-base-100 w-[80%] rounded-lg shadow-2xl">
                  <form onSubmit={handleSignUp} className="p-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="border px-4 py-2 rounded"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URl</span>
                      </label>
                      <input
                        name="photo"
                        type="text"
                        placeholder="Photo url"
                        className="border px-4 py-2 rounded"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="border px-4 py-2 rounded"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="border px-4 py-2 rounded"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="absolute right-5 top-2">
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn"><MdClose></MdClose></button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );


};

export default RegisterModal;
