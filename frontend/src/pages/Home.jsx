import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const { isAuthenticated, user } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isAuthenticated){
        navigate("/login")
    }
  },[isAuthenticated, navigate])

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome 👋</h1>

        <div className="space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 shadow">
            <p className="text-gray-400 text-sm">Name</p>
            <p className="text-xl font-semibold">{user?.name || "Guest"}</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 shadow">
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-xl font-semibold">{user?.email || "Not Available"}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full py-2 bg-red-600 hover:bg-red-700 transition-all duration-200 rounded-lg font-semibold shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
