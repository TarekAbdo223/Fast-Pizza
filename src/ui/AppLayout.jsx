import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(isLoading);

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        {/* <h1>Content</h1> */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
