import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
