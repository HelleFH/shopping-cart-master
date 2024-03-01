import React, { useEffect, useState } from "react";
import { HiShoppingCart, HiUserCircle } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAppStore } from "../../../store/appStore";
import API from "../../../utils/axios";

const Header = () => {
  const { user, totalCart } = useAppStore();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const getCartNumber = async () => {
    try {
      const { data, status } = await API("/api/user/get-user-cart-number");
      useAppStore.setState({ totalCart: data });
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (user) {
      getCartNumber();
    }
  }, [user]);

  return (
    <header style={{ backgroundColor: "#008472", color: "#F0F0F0" }} className="z-10 border-b-[1px] sticky top-0 text-black backdrop-blur-lg px-5 py-4 flex items-center justify-between">
      <div >
        <div className="flex justify-center items-center gap-2" onClick={() => navigate("/")}>

          <h2
            className="font-extrabold hover:text-gray-400 text-[32px] cursor-pointer tracking-wide sm:tracking-widest" style={{ fontFamily:'Cormorant' }}>Home  </h2>
        </div>
      </div>
      <div className="hidden sm:block">
        <ul className="flex items-center gap-3 text-[18px] font-semibold">
          <li>

          </li>
          {!user && (
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? "text-black" : "")}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-3 text-[16px] relative">
      <NavLink to={"/cart"} className="group">
  <HiShoppingCart className="cursor-pointer relative group-hover:text-gray-400" size={30} />
  {user && (
    <button
      style={{ backgroundColor: "#ca9176", color: "#F0F0F0" }}
      className="absolute top-[-15px] w-6 h-6 left-4 rounded-full bg-blue-500 text-white border-[1px] text-center"
    >
      <span className="translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
        {totalCart}
      </span>
    </button>
  )}
</NavLink>

{user ? (
  <HiUserCircle
    className="cursor-pointer"
    size={30}
    onClick={() => setShowMenu((pre) => !pre)}
  />
) : (
  <NavLink to={"/login"} className="group ">
    <HiUserCircle
      style={{}}
      className="cursor-pointer  group-hover:text-gray-400"
      size={30}
    />
  </NavLink>
)}

  

        {showMenu && <UserMenu setShowMenu={setShowMenu} />}
      </div>
    </header>
  );
};

export default Header;
