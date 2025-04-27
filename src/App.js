
import './App.css';
import { Menu } from 'antd';
import image from "../src/assets/image.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import City from './Pages/City';
import State from './Pages/State';
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
import { faSearch,faBell  } from '@fortawesome/free-solid-svg-icons';
import Campus from './Pages/Campus';
import Feepaymentyear from './Pages/Feepaymentyear';
import Applications from './NavbarPages/Applications';
import Employee from './NavbarPages/Employee';



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
                <Route path="/application" element={<Applications />} />
                <Route path="/employee" element={<Employee/>} />






                <Route path="/state" element={<State/>}/>
                <Route path="/campus" element={<Campus/>}/>
                <Route path="/feepaymentyear" element={<Feepaymentyear/>}/>
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
    <header className="header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '77px', backgroundColor: 'white' }}>
      
      {/* Logo */}
      <div>
        <img src={image} alt="Logo" style={{ height: '50px' }} />
      </div>

      {/* Search Bar */}
      <div className="search-container" style={{ flexGrow: 1, marginLeft: '20px', marginRight: '20px', position: 'relative' }}>
        <FontAwesomeIcon icon={faSearch} className="search-icon" style={{ position: 'absolute', top: '30%', left: '100px', transform: 'translateY(-50%)', color: '#aaa' }} />
        <input 
          type="text" 
          placeholder="Ask for anything" 
          className="search-input" 
          style={{ width: '50%', padding: '10px 10px 10px 40px', borderRadius: '20px', border: '1px solid #ddd' }}
        />
      </div>

      {/* Bell Icon */}
      <div className="icons-container" style={{ display: 'flex', alignItems: 'center', gap: '0px',marginRight:'10px' }}>
        <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px', cursor: 'pointer', color: '#555' }} />
        
        {/* Profile Section */}
        {/* <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',padding:'60px' }}>
        <div style={{ fontWeight: 'normal', color: 'black' }}>HYD 256789</div> 

          <div style={{ fontSize: '12px', color: '#333' }}>Cashier</div>
          {/* <img src="https://via.placeholder.com/40" alt="Profile" style={{ borderRadius: '50%', width: '40px', height: '40px' }} /> */}
        </div>
      </div>
    </header>
  );
}

function SideMenu() {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    if (e.key === "students") {
      navigate("/students");
    }else if (e.key === "application") {
      navigate("/application");
    }else if (e.key === "employee") {
      navigate("/employee");
    }
    
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
