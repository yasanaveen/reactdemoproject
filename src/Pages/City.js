import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
 
// View Modal Component
const CityViewModal = ({ isOpen, onClose, cityData, isNewRecord = false }) => {
  const [isEditing, setIsEditing] = useState(isNewRecord);
  const [editData, setEditData] = useState({...cityData});
  
  if (!isOpen) return null;
  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    // Reset to original data if canceling edit
    if (isEditing) {
      setEditData({...cityData});
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({...prev, [name]: value}));
  };
  
  const handleSave = () => {
    // Here you would typically save the changes
    // For now, just exit edit mode
    setIsEditing(false);
    onClose();
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-content view-modal">
        <div className="modal-header">
          <h2 className="modal-title">{isNewRecord ? "Add New Field" : (isEditing ? "Edit" : "View")}</h2>
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
                <button type="button" className="delete-button">Cancel</button>
                <button type="button" className="edit-button" onClick={handleEditToggle}>Edit</button>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #000000; /* Changed to solid black */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-content.view-modal {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          width: 650px;
          max-width: 95%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-title {
          font-size: 20px;
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
          gap: 32px;
          top:214px;
          left:360px;
          padding: 24px;
          radius: 12px;
        }
        
        .view-row {
          display: flex;
          gap: 16px;
          width: 100%;
        }
        
        .view-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .view-group label {
          font-size: 14px;
          font-weight: 500;
          color: #444;
        }
        
        .view-group input, .view-group select {
          padding: 8px 12px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          background-color: #fff;
          font-size: 14px;
        }
        
        .view-group input:not([readonly]), .view-group select:not([disabled]) {
          border-color: #4951f5;
          background-color: #f8f9ff;
        }
        
        .view-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
          margin-top: 24px;
        }
        
        .delete-button {
          padding: 8px 24px;
          border-radius: 4px;
          background-color: white;
          color: #ff4d4f;
          border: 1px solid #ff4d4f;
          cursor: pointer;
          font-weight: 500;
        }
        
        .edit-button, .save-button {
          padding: 8px 32px;
          border-radius: 4px;
          background-color: #4951f5;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }
        
        .cancel-button {
          padding: 8px 24px;
          border-radius: 4px;
          background-color: #f0f0f0;
          color: #444;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

const CityManagementPage = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isNewCity, setIsNewCity] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [cities, setCities] = useState([
    { cityCode: '01', city: 'Guntur', state: 'Andhra Pradesh', district: 'Guntur', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '01' },
    { cityCode: '02', city: 'Hyderabd', state: 'Telangana', district: 'Hyderabad', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '02' },
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
    setSelectedCity({});  // Empty object for new city
    setIsNewCity(true);   // Flag to indicate this is a new record
    setIsViewModalOpen(true);
  };
  
  const handleViewCity = (city) => {
    setSelectedCity(city);
    setIsNewCity(false);  // This is an existing record
    setIsViewModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsViewModalOpen(false);
    setSelectedCity(null);
    setIsNewCity(false);
  };
  
  const handleCheckboxChange = (cityCode) => {
    if (selectedCities.includes(cityCode)) {
      setSelectedCities(selectedCities.filter(code => code !== cityCode));
    } else {
      setSelectedCities([...selectedCities, cityCode]);
    }
  };
  
  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedCities([]);
    } else {
      setSelectedCities(cities.map(city => city.cityCode));
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
 
      {/* Table Container with Fixed Height and Vertical Scrolling */}
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
                      <span className="table-action">🗑️</span>
                      <span className="table-action">✏️</span>
                      <span 
                        className="table-action view-action"
                        onClick={() => handleViewCity(row)}
                      >
                        👁️ View
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
 
      <div className="pagination">
        <button className="pagination-button">Previous</button>
        {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
          <button
            key={index}
            className={`pagination-button ${page === 1 ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
        <button className="pagination-button">Next</button>
      </div>
      
      <CityViewModal
        isOpen={isViewModalOpen}
        onClose={handleCloseModal}
        cityData={selectedCity || {}}
        isNewRecord={isNewCity}
      />
 
      <style>{`
        .page-content {
          padding: 24px;
          background-color: #ffffff;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          min-height: 400px;
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
        
        /* Table wrapper with fixed height */
        .table-container-wrapper {
          position: relative;
          margin-bottom: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
        }
        
        /* Enhanced table responsive container with both horizontal and vertical scrolling */
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          overflow-y: auto;
          max-height: 400px; /* Fixed height for vertical scrolling */
          -webkit-overflow-scrolling: touch;
          /* Enhanced scrollbar styles */
          scrollbar-width: thin;
          scrollbar-color:rgb(233, 235, 237) #f0f0f0;
        }
        
        /* Horizontal scrollbar styles */
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
          min-width: 1200px; /* Ensures table doesn't shrink too much */
        }
 
        .table-container th,
        .table-container td {
          padding: 23px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
          white-space: nowrap; /* Prevents text wrapping in cells */
        }
 
        .table-container th {
          background-color: #f8f9fa;
          font-weight: 600;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 1px 0 #e2e8f0; /* Creates a border effect even when scrolling */
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
        
        .view-action {
          color:rgb(117, 120, 126);
        }
 
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
          flex-wrap: wrap; /* Allow pagination to wrap on smaller screens */
        }
 
        .pagination-button {
          padding: 8px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          background-color: #fff;
          font-size: 14px;
        }
 
        .pagination-button.active {
          background-color:rgb(226, 229, 233);
          color: #fff;
          border-color:rgb(135, 136, 136);
        }
        
        /* Responsive adjustments */
        @media screen and (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          
          .page-actions {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
          
          .pagination {
            padding: 8px 0;
          }
        }
      `}</style>
    </div>
  );
};
 
export default CityManagementPage;