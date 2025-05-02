import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";
import { FaStream } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import serachicon from '../src/assets/searchicon.png';
import './bodycss.css';



function Bodysection() {
  const navigate = useNavigate();

  const categories = [
    { label: "State", key: "state", icon: <IoLocationOutline /> },
    { label: "City", key: "city", icon: <MdLocationCity /> },
    { label: "Campus", key: "campus", icon: <FaUniversity /> },
    { label: "Fee Payment Year", key: "feeyear", icon: <FaCalendarAlt /> },
    { label: "Fee Heads", key: "fee-heads", icon: <MdPayment /> },
    { label: "Organization", key: "organization", icon: <FaBuilding /> },
    { label: "Card Type", key: "card-type", icon: <MdCreditCard /> },
    { label: "Stream", key: "stream", icon: <FaStream /> },
    { label: "Program Name", key: "program-name", icon: <FaBookOpen /> },
    { label: "Exam Program", key: "exam-program", icon: <MdSchool /> },
    { label: "Course Track", key: "course-track", icon: <FaChalkboardTeacher /> },
  ];

  const handleClick = (item) => {
    if (item.key === "city") {
      navigate("/city");
    }else if(item.key==="state"){
       navigate("/state")
    }else if(item.key==="campus"){
      navigate ("/campus")
    }else if(item.key==="feeyear"){
      navigate ("/feepaymentyear")
    }
   
  };

  return (
    <div className="bodycontainer">
      <div className="left-section">
        <h1 className="body-title">Students Masters</h1>
        <p className="bodydescription text-gray-600 mt-2 mb-4">
          Access and manage comprehensive student details seamlessly.<br />
          View personalized profiles tailored to your campus.
        </p>
        <div className="search-wrapper">
          <div className="above">
         <img src={ serachicon } alt='searchicon' className="icon"/>
         </div>
         <div className="binph">
         <input type="text"  className="inph" placeholder='Search for the module '/>

          {/* <input type="text" className="bodyinput" placeholder="Search for the module" style={{ paddingLeft: '40px' }}/> */}
        </div>
        </div>
      </div>

      <div className="right-section">
        {categories.map((item, index) => (
          <button
            key={item.key}
            className="pill-button"
            onClick={() => handleClick(item)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Bodysection;
