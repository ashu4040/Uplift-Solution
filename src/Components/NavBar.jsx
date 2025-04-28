import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-white items-center p-6 screen relative">
        <h2 className="text-2xl font-extrabold text-purple-700 flex flex-col ">
          <span>UPLIFT</span> <span>SOLUTION</span>
        </h2>
        <img
          className="absolute right-0  z-20"
          src="https://img1.wsimg.com/isteam/ip/175c6419-b66d-4d2b-a1e7-d604031debab/Uplift%20solution%20logo%20.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"
          alt=""
        />
      </nav>
    </div>
  );
};

export default NavBar;
