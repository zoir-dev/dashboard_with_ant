import { Image } from "antd";
import { BarChartOutlined, LogoutOutlined, ScheduleOutlined, SettingOutlined, TeamOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import './style.scss';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()


  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  const logOut = () => {
    localStorage.removeItem('login')
    navigate('/signUp')
  }
  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <div className="home_left">
      <div className="head">
        <div className="title">
          <Image src={logo} alt='logo' />
          <h2>Dashboard</h2>
        </div>
        <div className="menus">
          <span className="navbar_span">Main menu</span>
          <div onClick={() => handleNavigate('/')} className={isActive('/') ? 'menu active_menu' : 'menu'}>
            <BarChartOutlined />
            <p>Statistika</p>
          </div>
          <div onClick={() => handleNavigate('/students')} className={isActive('/students') ? 'menu active_menu' : 'menu'}>
            <UsergroupAddOutlined />
            <p>Studentlar</p>
          </div>
          <div onClick={() => handleNavigate('homeWorks')} className={isActive('/homeWorks') ? 'menu active_menu' : 'menu'}>
            <ScheduleOutlined />
            <p>Vazifalar</p>
          </div>
          <div onClick={() => handleNavigate('/workValue')} className={isActive('/workValue') ? 'menu active_menu' : 'menu'}>
            <BarChartOutlined />
            <p>Ish natijalari</p>
          </div>
          <div onClick={() => handleNavigate('/workers')} className={isActive('/workers') ? 'menu active_menu' : 'menu'}>
            <TeamOutlined />
            <p>Xodimlar</p>
          </div>
        </div>
      </div>
      <div className="menus">
        <span className="navbar_span">Preferences</span>
        <div onClick={() => handleNavigate('/settings')} className={isActive('/settings') ? 'menu active_menu' : 'menu'}>
          <SettingOutlined />
          <p>Sozlamalar</p>
        </div>
        <div className="menu" onClick={logOut}>
          <LogoutOutlined />
          <p>Chiqish</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

