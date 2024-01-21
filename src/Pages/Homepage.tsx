import React from "react";
import MainLayout from "../Components/Layout/MainLayout";
import TopForm from "../Components/Fragments/TopForm";
import BottomForm from "../Components/Fragments/BottomForm";

const HomePage = () => {
  return (
    <div className="h-screen bg-[url('/src/assets/bg-image.jpg')]">
      <div className="h-full w-full bg-slate-600 bg-opacity-60">
        <MainLayout title="RECIPE EDITOR">
          <TopForm />
          <BottomForm />
        </MainLayout>
      </div>
    </div>
  );
};

export default HomePage;
