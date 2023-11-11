import Footer from '../../components/Layouts/Footer';
import Header from '../../components/Layouts/Header';
import { Outlet } from "react-router-dom";

const ProtectedLayout = ({ children }: any) => (
  <div>
    <Header />
    {children}
    <Outlet />
    <Footer />
  </div>
); 

export default ProtectedLayout;
