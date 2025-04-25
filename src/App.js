
import './App.css';
import { Menu } from 'antd';
import image from "../src/assets/image.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import City from './Pages/City';
import Bodysection from './Bodysection';
import { PiStudentBold } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa6";
import { RiEmpathizeFill } from "react-icons/ri";
import { MdWarehouse } from "react-icons/md";
import { MdOutlineSms } from "react-icons/md";
import { TbMessage2Question } from "react-icons/tb";
import { MdOutlineWebAsset } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { LuCctv } from "react-icons/lu";
import { IoIosMan } from "react-icons/io";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';





function App() {
  return (
    <div className='app-container'>
      <Router>
        <div style={{ height: 77, backgroundColor: 'white' }}>
          <Header />
        </div>
        <div className='main-container'>
          <SideMenu />
          <div className='body-container'>
            <section className='bodycolor'>
              <Routes>
                <Route path="/students" element={<Bodysection />} />
                <Route path="/city" element={<City />} />
              </Routes>
            </section>
          </div>
        </div>
        
      </Router>
      
    </div>
  );
}

function Header() {
  return (
    <header>
  <div>
    <img src={image} alt="Logo" />
  </div>
  <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input type="text" placeholder="Ask for anything" className="search-input" />
  </div>
      
</header>

  );
}

function SideMenu() {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    if (e.key === "students") {
      navigate("/students");
    }
    // You can add more routes here if needed
  };

  const menuItems = [
    { label: "Students", key: "students", icon: <PiStudentBold /> },
    { label: "Application", key: "application", icon: <FaNewspaper /> },
    { label: "Employee", key: "employee", icon: <RiEmpathizeFill /> },
    { label: "Fleet", key: "fleet", icon: <FaPersonMilitaryRifle /> },
    { label: "Warehouse", key: "warehouse", icon: <MdWarehouse /> },
    { label: "SMS", key: "sms", icon: <MdOutlineSms /> },
    { label: "Question Bank", key: "question", icon: <TbMessage2Question /> },
    { label: "Assets Management", key: "assets", icon: <MdOutlineWebAsset /> },
    { label: "Payment Services", key: "payment", icon: <MdOutlinePayment /> },
    { label: "CCTV", key: "cctv", icon: <LuCctv /> },
    { label: "HRMS", key: "hrms", icon: <IoIosMan /> }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "25px" }}>
      <Menu mode="vertical" items={menuItems} onClick={handleMenuClick} />
    </div>
  );
}

export default App;
