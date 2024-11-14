import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { authContext } from "../AuthProvider/AuthProvider";
const Modal = () => {

    const {signInUser} = useContext(authContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signInUser(email,password)
      .then(result => {
        console.log(result);
        e.target.reset();
      })
      
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="w-11/12 max-w-5xl">
          <div className="hero bg-base-200 p-10">
            <div className="p-2 flex gap-8 lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="bg-base-100 rounded-lg shadow-2xl">
                <form onSubmit={handleSignIn} className="p-4">
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
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
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
  );
};

export default Modal;
