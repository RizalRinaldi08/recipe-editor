import React from "react";

interface Iprops {
  children: children;
  title: string;
}

const MainLayout = ({ children, title }: Iprops) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <div className="text-3xl text-white mt-10">
        <h1 className="bg-black bg-opacity-20 px-20 py-5 ">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
