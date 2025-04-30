import React, { useState } from 'react';
import { Trash2, Pen, Eye } from 'lucide-react';
import { Header, SideMenu } from '../App';

// View Form Component (changed to render as an overlay)
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
            <h2 className="form-title">{isNewRecord ? "Add New Field" : (isEditing ? "Edit" : "View")}</h2>
            <button className="close-button" onClick={onClose}>×</button>
          </div>

          <div className="view-form">
            <div className="view-row">
              <div className="view-group">
                <label>City ID</label>
                <input
                  type="text"
                  name="cityId"
                  value={editData.cityCode || ''}
                  onChange={handleChange}
                  readOnly={!isNewRecord}
                />
              </div>
              <div className="view-group">
                <label>City Code</label>
                <input
                  type="text"
                  name="cityCode"
                  value={editData.cityCode || ''}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="view-group">
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
            </div>

            <div className="view-row">
              <div className="view-group">
                <label>Status</label>
                <select
                  name="status"
                  value={editData.status || ''}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="">Select Status</option>
                  <option value="Updated">Updated</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="view-group">
                <label>District ID</label>
                <select
                  name="district"
                  value={editData.district || ''}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="">Select District</option>
                  <option value="Guntur">Guntur</option>
                  <option value="Krishna">Krishna</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                </select>
              </div>
              <div className="view-group">
                <label>Zone ID</label>
                <select
                  name="zone"
                  value={editData.zone || ''}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="">Select Zone</option>
                  <option value="Updated">Updated</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            <div className="view-row">
              <div className="view-group">
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
              <div className="view-group">
                <label>State</label>
                <select
                  name="state"
                  value={editData.state || ''}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>
              {!isNewRecord && (
                <div className="view-group">
                  <label>Sync Date</label>
                  <input
                    type="text"
                    name="syncDate"
                    value={editData.syncDate || ''}
                    onChange={handleChange}
                    readOnly={true}
                  />
                </div>
              )}
            </div>

            <div className="view-actions">
              {isEditing ? (
                <>
                  <button type="button" className="cancel-button" onClick={isNewRecord ? onClose : handleEditToggle}>Cancel</button>
                  <button type="button" className="save-button" onClick={handleSave}>Save</button>
                </>
              ) : (
                <>
                  <button type="button" className="delete-button">Delete</button>
                  <button type="button" className="edit-button" onClick={handleEditToggle}>Edit</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
 
};

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
    <div className="page-content">
      <div className="page-header">
        <h2 className="page-title">City</h2>
        <div className="page-actions">
          <button className="action-button">Filter</button>
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
        <div className="table-responsive">
          <table className="table-container">
            <thead>
              <tr>
                <th>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((row, index) => (
                <tr key={index}>
                  <td>
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
      </div>

      {/* Modified pagination to match the provided screenshot */}
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
        .page-content {
          padding: 24px;
          background-color: #ffffff;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          position: relative;
         
          
          
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .page-title {
          font-size: 24px;
          font-weight: 700;
        }

        .page-actions {
          display: flex;
          gap: 8px;
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
          background-color: #007bff;
          color: #fff;
          border-color: #007bff;
        }
        
        .bulk-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          background-color: #f9f9f9;
          border-radius: 8px;
          margin-bottom: 16px;
        }
        
        .checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        
        .table-container-wrapper {
          position: relative;
          margin-bottom: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          overflow-y: auto;
          max-height: 400px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgb(233, 235, 237) #f0f0f0;
        }
        
        .table-responsive::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }
        
        .table-responsive::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 4px;
        }
        
        .table-responsive::-webkit-scrollbar-thumb {
          background-color: #007bff;
          border-radius: 4px;
        }
        
        .table-responsive::-webkit-scrollbar-thumb:hover {
          background-color: #0056b3;
        }

        .table-container {
          width: 100%;
          border-collapse: collapse;
          min-width: 1200px;
        }

        .table-container th,
        .table-container td {
          padding: 23px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
          white-space: nowrap;
        }

        .table-container th {
          background-color: #f8f9fa;
          font-weight: 600;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 1px 0 #e2e8f0;
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
          gap: 4px;
        }

        .icon {
          display: block;
          width: 16px;
          height: 16px;
        }
        
        .view-action {
          color: rgb(117, 120, 126);
        }

        /* Modified pagination styles to match the screenshot */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
        }

        .pagination-button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          min-width: 36px;
          padding: 0 12px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          background-color: #fff;
          color: #444;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

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

        .pagination-arrow {
          width: 16px;
          height: 16px;
        }

        .pagination-ellipsis {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          color: #6b7280;
        }

        /* Modal overlay styles */
        .modal-overlay {
          position: fixed;
          top:77px;
          left: 240px;
          right: 0;
          bottom: 0;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        /* Form styles */
        .view-form-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .view-form-content {
          background-color: #fff;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .form-title {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }
        
        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #333;
          padding: 0;
          line-height: 1;
        }
        
        .view-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 16px;
          border-radius: 8px;
        }
        
        .view-row {
          display: flex;
          gap: 12px;
          width: 100%;
        }
        
        .view-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .view-group label {
          font-size: 12px;
          font-weight: 500;
          color: #444;
        }
        
        .view-group input, .view-group select {
          padding: 6px 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          background-color: #fff;
          font-size: 13px;
        }
        
        .view-group input:not([readonly]), .view-group select:not([disabled]) {
          border-color: #4951f5;
          background-color: #f8f9ff;
        }
        
        .view-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
          margin-top: 16px;
        }
        
        .delete-button, .cancel-button {
          padding: 6px 16px;
          border-radius: 4px;
          background-color: white;
          color: #ff4d4f;
          border: 1px solid #ff4d4f;
          cursor: pointer;
          font-weight: 500;
          font-size: 12px;
        }
        
        .edit-button, .save-button {
          padding: 6px 20px;
          border-radius: 4px;
          background-color: #4951f5;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default CityManagementPage;