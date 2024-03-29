import { Outlet } from "react-router-dom";
import Layout from "../component/layout/Layout";
import NavBar from "../component/layout/NavBar";
import Footer from "../component/layout/Footer";
const RootLayout = () => {
  return (
    <Layout>
      <NavBar />
      <Outlet />
      <Footer />
    </Layout>
  );
};
export default RootLayout;
