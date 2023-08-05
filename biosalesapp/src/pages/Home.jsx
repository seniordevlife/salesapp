import React from "react";
import Navbar from "../components/NavbarMain";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
