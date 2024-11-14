import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Modal from "../Modal/Modal";
import RegisterModal from "../Modal/RegisterModal";
import Menu from "../Menu/Menu";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { productContext } from "../../layout/Root";

const Navbar = () => {
  const {clothItem, setClothItem,totalPrice,setTotalPrice} = useContext(productContext);
const {signInWithGoogle,signInWithFacebook,signInWithGithub,signInWithTwitter,user,signOutUser} = useContext(authContext);


const handleSignOut = () => {
  signOutUser()
  .then(() => {
    console.log("User is Signed out");
    navigate("/SignIn")
  })

}

const handleTwitterSignIn = () => {
  signInWithTwitter()
  .then(() => {
    console.log("Twitter sign in successful");
  })
  .catch((error) => {
    console.log("error Twitter", error);
  })
}

 const handleGithubSignIn = () => {
  signInWithGithub()
  .then(() => {
    console.log("Github sign in successful");
  })
  .catch((error) => {
    console.log("error Github", error);
  })
 }


const handleGoogleSignIn = () => {
  signInWithGoogle()
  .then(() => {
    console.log("Google sign in successful");
  })
  .catch((error) => {
    console.log("error", error);
  })
}

const handleFacebookSignIn = () => {
  signInWithFacebook()
  .then(() => {
    console.log("Facebook sign in successful");
  })
  .catch((error) => {
    console.log("error Facebook", error);
  })
}



  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);




  return (
    <div className="w-11/12 mx-auto py-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
          <img src={Logo} className="w-16" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-end space-x-4">

          <div className="">
            <span>{user?.email}</span>
          </div>
          {
            user ? <button onClick={handleSignOut} className="btn">Sign Out</button> : <Link className="btn" onClick={() => document.getElementById("my_modal_4").showModal()}>Sign In</Link>
          }
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{clothItem}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{clothItem} Items</span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <NavLink to="/Dashboard" className="btn btn-primary btn-block">
                    View cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => setMenu(!menu)} className="cursor-pointer">
            <FaBarsStaggered></FaBarsStaggered>
          </button>
          <div
           className={`bg-slate-400 p-6 z-10 absolute right-0 top-0 duration-1000 w-80 h-full ${
            menu ? "-left-5" : "-left-full"
          }`}
          >
            <div className="text-right">
              <button onClick={() => setMenu(!menu)} className={`btn bg-white`}>
                <MdClose></MdClose>
              </button>
            </div>  
            <div className="space-y-4 mt-8">
              <button
                className="btn w-full bg-[#062246] text-white"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Login{" "}
              </button>

              <button
                className="btn w-full bg-[#062246] text-white"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Register
              </button>
              <button   onClick={handleGoogleSignIn} className="btn w-full bg-[#062246] text-white">Login with Google</button>
              <button   onClick={handleFacebookSignIn} className="btn w-full bg-[#062246] text-white">Login with Facebook</button>
              <button   onClick={handleTwitterSignIn} className="btn w-full bg-[#062246] text-white">Login with Twitter</button>
              <button   onClick={handleGithubSignIn}  className="btn w-full bg-[#062246] text-white">Login with Github</button>
            </div>
          </div>

          {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
          </div> */}
        </div>
      </div>
      <Modal></Modal>
      <RegisterModal></RegisterModal>
      <Menu></Menu>
    </div>
  );
};
// ismailjosim99@gmail.com
export default Navbar;
