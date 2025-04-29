import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const NavBar = () => {
  useGSAP(() => {
    gsap.from(".name", {
      scale: 0,
      opacity: 0,
      duration: 1,
    });
  });

  useGSAP(() => {
    gsap.from(".logo", {
      scale: 0,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div>
      <nav className="flex justify-between bg-white items-center p-6 screen relative">
        <h2 className="name text-2xl font-extrabold text-purple-700 flex flex-col ">
          <span>UPLIFT</span> <span>SOLUTION</span>
        </h2>
        <img
          className="logo absolute right-0  z-20"
          src="https://img1.wsimg.com/isteam/ip/175c6419-b66d-4d2b-a1e7-d604031debab/Uplift%20solution%20logo%20.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"
          alt=""
        />
      </nav>
    </div>
  );
};

export default NavBar;
