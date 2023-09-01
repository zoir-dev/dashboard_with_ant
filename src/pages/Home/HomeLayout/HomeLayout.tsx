import { useNavigate } from "react-router-dom";
import AppBar from "../../../components/AppBar/AppBar";
import Navbar from "../../../components/Navbar/Navbar";
import './style.scss'
import { ReactNode, useEffect, useState } from "react";
import NavbarDrawr from "../../../components/Navbar/NavbarDrawr";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {

  const [drawer, setDrawer] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('login')) {
      navigate('/signUp')
    }

  }, [navigate])
  return (
    <div className="home_div">
      <div className="home_navbar">
        <Navbar />
      </div>
      <div className="home-right">
        <AppBar setOpen={setDrawer} />
        {children}
      </div>
      <NavbarDrawr open={drawer} setOpen={setDrawer} />
    </div>
  );
};

export default HomeLayout;
