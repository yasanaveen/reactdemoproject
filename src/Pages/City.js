import React, { useState } from 'react';
import { Trash2, Pen, Eye } from 'lucide-react';
import { Header, SideMenu } from '../App';

// View Form Component redesigned to match screenshot 2
const CityViewForm = ({ isOpen, onClose, cityData, isNewRecord = false }) => {
  const [isEditing, setIsEditing] = useState(isNewRecord);
  const [editData, setEditData] = useState({ ...cityData });

  if (!isOpen) return null;

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setEditData({ ...cityData });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    onClose();
  };

  return (
    <>
      <Header/>
      <SideMenu/>

      <div className="modal-overlay">
        <div className="view-form-container">
          <div className="view-form-content">
            <div className="form-header">
              <h2 className="form-title">Add New Field</h2>
              <button className="close-button" onClick={onClose}>×</button>
            </div>

            <div className="view-form">
              <div className="view-form-grid">
                {/* First row */}
                <div className="form-group">
                  <label>City ID</label>
                  <input
                    type="text"
                    name="cityId"
                    value={editData.cityCode || '01'}
                    onChange={handleChange}
                    readOnly={!isNewRecord}
                  />
                </div>
                <div className="form-group">
                  <label>City Code</label>
                  <input
                    type="text"
                    name="cityCode"
                    value={editData.cityCode || '01'}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>City Name</label> 
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter Value"
                    value={editData.city || ''}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>

                {/* Second row */}
                <div className="form-group">
                  <label>Status</label>
                  <input
                    type="text"
                    name="status"
                    value={editData.status || '01'}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>District ID</label>
                  <input
                    type="text"
                    name="district"
                    value={editData.district || '01'}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Zone ID</label>
                  <input
                    type="text"
                    name="zone"
                    placeholder="Enter Value"
                    value={editData.zone || ''}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>

                {/* Third row */}
                <div className="form-group">
                  <label>Payroll City Code</label>
                  <input
                    type="text"
                    name="payrollCityCode"
                    placeholder="Enter Value"
                    value={editData.payrollCityCode || ''}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Sync Status</label>
                  <input
                    type="text"
                    name="syncStatus"
                    value={editData.syncStatus || '01'}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Sync Date</label>
                  <input
                    type="text"
                    name="syncDate"
                    value={editData.syncDate || '01'}
                    onChange={handleChange}
                    readOnly={!isEditing}
                  />
                </div>
              </div>

              <div className="view-actions">
                <button type="button" className="delete-button">Delete</button>
                <button type="button" className="edit-button" onClick={handleEditToggle}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Main component remains the same
const CityManagementPage = () => {
  const [isViewFormOpen, setIsViewFormOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isNewCity, setIsNewCity] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [cities, setCities] = useState([
    { cityCode: '01', city: 'Guntur', state: 'Andhra Pradesh', district: 'Guntur', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '01' },
    { cityCode: '02', city: 'Hyderabd', state: "Telangana", district: "Hyderabad", zone: "Updated", payrollCityCode: "Updated", status: "Updated", syncDate: "02" },
    { cityCode: '03', city: 'Bangalore', state: 'Karnataka', district: 'Bangalore', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '03' },
    { cityCode: '04', city: 'Chennai', state: 'Tamil Nadu', district: 'Chennai', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '04' },
    { cityCode: '05', city: 'Mumbai', state: 'Maharashtra', district: 'Mumbai', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '05' },
    { cityCode: '06', city: 'Delhi', state: 'Delhi', district: 'New Delhi', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '06' },
    { cityCode: '07', city: 'Kolkata', state: 'West Bengal', district: 'Kolkata', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '07' },
    { cityCode: '08', city: 'Jaipur', state: 'Rajasthan', district: 'Jaipur', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '08' },
    { cityCode: '09', city: 'Ahmedabad', state: 'Gujarat', district: 'Ahmedabad', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '09' },
    { cityCode: '10', city: 'Pune', state: 'Maharashtra', district: 'Pune', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '10' },
    { cityCode: '11', city: 'Kochi', state: 'Kerala', district: 'Kochi', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '11' },
    { cityCode: '12', city: 'Lucknow', state: 'Uttar Pradesh', district: 'Lucknow', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '12' },
    { cityCode: '13', city: 'Chandigarh', state: 'Punjab', district: 'Chandigarh', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '13' },
    { cityCode: '14', city: 'Bhopal', state: 'Madhya Pradesh', district: 'Bhopal', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '14' },
    { cityCode: '15', city: 'Dehradun', state: 'Uttarakhand', district: 'Dehradun', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '15' },
    { cityCode: '16', city: 'Patna', state: 'Bihar', district: 'Patna', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '16' },
    { cityCode: '17', city: 'Raipur', state: 'Chhattisgarh', district: 'Raipur', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '17' },
    { cityCode: '18', city: 'Ranchi', state: 'Jharkhand', district: 'Ranchi', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '18' },
    { cityCode: '19', city: 'Agra', state: 'Uttar Pradesh', district: 'Agra', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '19' },
    { cityCode: '20', city: 'Varanasi', state: 'Uttar Pradesh', district: 'Varanasi', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '20' },
    { cityCode: '21', city: 'Surat', state: 'Gujarat', district: 'Surat', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '21' },
    { cityCode: '22', city: 'Vadodara', state: 'Gujarat', district: 'Vadodara', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '22' },
    { cityCode: '23', city: 'Indore', state: 'Madhya Pradesh', district: 'Indore', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '23' },
    { cityCode: '24', city: 'Nashik', state: 'Maharashtra', district: 'Nashik', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '24' },
    { cityCode: '25', city: 'Coimbatore', state: "Tamil Nadu", district:"Coimbatore", zone:"Updated", payrollCityCode:"Updated", status:"Updated", syncDate:"25" }
  ]);

  const handleOpenAddNewField = () => {
    setSelectedCity({});
    setIsNewCity(true);
    setIsViewFormOpen(true);
  };

  const handleViewCity = (city) => {
    setSelectedCity(city);
    setIsNewCity(false);
    setIsViewFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsViewFormOpen(false);
    setSelectedCity(null);
    setIsNewCity(false);
  };

  const handleCheckboxChange = (cityCode) => {
    if (selectedCities.includes(cityCode)) {
      setSelectedCities(selectedCities.filter((code) => code !== cityCode));
    } else {
      setSelectedCities([...selectedCities, cityCode]);
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedCities([]);
    } else {
      setSelectedCities(cities.map((city) => city.cityCode));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="page-header">
          <h2 className="page-title">City</h2>
          <div className="page-actions">
            <div className="filter-button-container">
              <button className="action-button">Filter</button>
              <span className="notification-badge">1</span>
            </div>
            <button className="action-button">Export</button>
            <button
              className="action-button primary"
              onClick={handleOpenAddNewField}
            >
              Add New Field
            </button>
          </div>
        </div>

        {selectedCities.length > 0 && (
          <div className="bulk-actions">
            <span>{selectedCities.length} items selected</span>
            <button className="action-button">Delete Selected</button>
          </div>
        )}

        <div className="table-container-wrapper">
        <table className="table-container">
              <thead>
                <tr>
                  <th style={{ width: '30px' }}>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                      className="checkbox"
                    />
                  </th>
                  <th>City Code</th>
                  <th>City</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Zone</th>
                  <th>Payroll City Code</th>
                  <th>Status</th>
                  <th>Sync Status</th>
                  <th>Sync Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cities.map((row, index) => (
                  <tr key={index}>
                    <td style={{ width: '40px' }}>
                      <input
                        type="checkbox"
                        checked={selectedCities.includes(row.cityCode)}
                        onChange={() => handleCheckboxChange(row.cityCode)}
                        className="checkbox"
                      />
                    </td>
                    <td>{row.cityCode}</td>
                    <td>{row.city}</td>
                    <td>{row.state}</td>
                    <td>{row.district}</td>
                    <td>{row.zone}</td>
                    <td>{row.payrollCityCode}</td>
                    <td>{row.status}</td>
                    <td>{row.status}</td>
                    <td>{row.syncDate}</td>
                    <td>
                      <div className="table-actions">
                        <span className="table-action"><Trash2 /></span>
                        <span className="table-action"><Pen /></span>
                        <span
                          className="table-action view-action"
                          onClick={() => handleViewCity(row)}
                        >
                          <span className="icon-text">
                            <Eye className="icon" />
                            <span>View</span>
                          </span>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

        <div className="pagination">
          <button className="pagination-button prev">
            <svg className="pagination-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </button>
          
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <span className="pagination-ellipsis">...</span>
          <button className="pagination-button">8</button>
          <button className="pagination-button">9</button>
          <button className="pagination-button">10</button>
          <button className="pagination-button next">
            Next
            <svg className="pagination-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Modal form rendered conditionally as overlay */}
        {isViewFormOpen && (
          <CityViewForm
            isOpen={isViewFormOpen}
            onClose={handleCloseForm}
            cityData={selectedCity || {}}
            isNewRecord={isNewCity}
          />
        )}

        <style>{`
          .page-wrapper {
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          
          .page-content {
            padding: 24px;
            background-color: #ffffff;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
          }

          .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            flex-shrink: 0;
          }

          .page-title {
            font-size: 24px;
            font-weight: 700;
          }

          .page-actions {
            display: flex;
            gap: 8px;
          }

          /* New styles for filter button with notification */
          .filter-button-container {
            position: relative;
            display: inline-block;
          }

          .notification-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: #ff4d4f;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
          }

          .action-button {
            padding: 8px 16px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            background-color: #f0f0f0;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            color: #444;
          }

          .action-button.primary {
            background-color: rgb(76, 134, 250);
            color: #fff;
            border-color: rgb(79, 64, 246);
          }
          
          .bulk-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 16px;
            background-color: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 16px;
            flex-shrink: 0;
          }
          
          .checkbox {
            width: 16px;
            height: 16px;
            cursor: pointer;
          }
          
          /* Table container styles */
          .table-container-wrapper {
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            margin-bottom: 16px;
            width:1350px;
            height: 630px;
            overflow-y: auto;
            overflow-x: auto;
          }
          
          
          .table-container {
            width: 1700px;
            border-collapse: collapse;
            table-layout: fixed;
          }

          .table-container th,
          .table-container td {
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
            white-space: nowrap;
          }

          .table-container th {
            background-color: #f8f9fa;
            font-weight: 600;
            z-index: 10;
          }
          
          .table-container tr:hover {
            background-color: #f5f8ff;
          }

          .table-actions {
            display: flex;
            gap: 8px;
          }

          .table-action {
            cursor: pointer;
            color: #666;
          }
          
          .icon-text {
            display: inline-flex;
            align-items: center;
            gap: 1px;
          }

          .icon {
            display: block;
            width: 16px;
            height: 16px;
          }
          
          .view-action {
            color: rgb(117, 120, 126);
          }

          /* Custom scrollbar styles */
          .table-body::-webkit-scrollbar {
            height: 10px;
            width: 8px;
          }
          
          .table-body::-webkit-scrollbar-track {
            background: #f0f0f0;
            border-radius: 4px;
          }
          
          .table-body::-webkit-scrollbar-thumb {
            background-color: rgb(194, 195, 196);
            border-radius: 4px;
          }
          
          .table-body::-webkit-scrollbar-thumb:hover {
            background-color: rgb(233, 236, 238);
          }

          /* Pagination styles */
          .pagination-button.active {
            background-color: #1a73e8;
            color: white;
            border-color: #1a73e8;
          }

          .pagination-button:hover:not(.active) {
            background-color: #f8f9fa;
          }

          .pagination-button.prev,
          .pagination-button.next {
            padding: 0 16px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .pagination-button.prev{
          margin-right: 350px;
          }

           .pagination-button.next{
           margin-left: 350px;}

          .pagination-arrow {
            width: 16px;
            height: 16px;
          }

          .pagination-ellipsis {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            color: #6b7280;
          }

          /* Modal overlay styles */
          .modal-overlay {
            position: fixed;
            top: 77px;
            left: 240px;;
            right: 0;
            bottom: 0;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          /* Form styles redesigned to match screenshot 2 */
          .view-form-container {
            width: 100%;
            max-width: 450px; /* Adjusted width to match screenshot */
            margin: 0 auto;
          }

          .view-form-content {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            gap:32px;
          }
          
          .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:  10px;
            border-bottom:
            width: 432px;
            height: 30px;
          }
          
          .form-title {
            font-size: 16px;
            font-weight: 600;
            margin: 5;
          }
          
          .close-button {
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: #333;
            padding: 0;
            line-height: 1;
          }
          
          .view-form {
            display: flex;
            flex-direction: column;
            padding: 30px;
          }
          
          /* Grid layout for the form fields */
          .view-form-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 20px;
          }
          
          .form-group {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          
          .form-group label {
            font-size: 12px;
            color: #444;
            font-weight: normal;
          }
          
          .form-group input {
            padding: 8px 10px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            font-size: 14px;
            width: 80%;
          }
          
          .form-group input::placeholder {
            color: #aaa;
          }
          
          .view-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 8px;
            padding-top: 16px;
            
          }
          
          .delete-button {
            display: flex;
            border-radius: 10px;
            background-color: white;
            color: #ff4d4f;
            border: 1px solid #ff4d4f;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
          }
          
          .edit-button {
            padding: 8px 120px;
            border-radius: 8px;
            background-color: #4951f5;
            color: white;
            border: none;
            width: 318px;
            height:44px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CityManagementPage;