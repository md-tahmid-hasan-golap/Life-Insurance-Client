import React, { useContext } from "react";
import Logo from "../../assets/Logo/insurance-agent_7985060.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: true, // OK button থাকবে
          confirmButtonText: "OK",
          timer: 2000, // 2 সেকেন্ড পরে alert auto-close হবে
          timerProgressBar: true, // চাইলে progress bar দেখানো যাবে
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allPolicies"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
          }
        >
          All Policies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
          }
        >
          Blog
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Life Insurance Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="text-sm md:text-xl font-bold">Life Insurance</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end mr-1">
        {user ? (
          <div className="navbar-end flex gap-2">
            <img
              className="w-10 h-10 rounded-full border-2 border-blue-600 cursor-pointer"
              src={user?.photoURL}
              title={user?.displayName}
              alt=""
            />
            <h3 className="text-2xl font-medium hidden md:flex">
              {user?.displayName}
            </h3>
            <button onClick={handelLogout} className="btn text-red-600">
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            {" "}
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
