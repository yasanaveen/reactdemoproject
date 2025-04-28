import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
// View Modal Component
const CityViewModal = ({ isOpen, onClose, cityData }) => {
  const [isEditing, setIsEditing] = useState(false);
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
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-content view-modal">
        <div className="modal-header">
          <h2 className="modal-title">{isEditing ? "Edit" : "View"}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="view-form">
          <div className="view-row">
            <div className="view-group">
              <label>City ID</label>
              <input 
                type="text" 
                name="cityId"
                value={editData.cityCode || '01'} 
                readOnly 
              />
            </div>
            <div className="view-group">
              <label>City Code</label>
              <input 
                type="text" 
                name="cityCode"
                value={editData.cityCode || '01'} 
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
              <input 
                type="text" 
                name="status"
                value={editData.status || '01'} 
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="view-group">
              <label>District ID</label>
              <input 
                type="text" 
                name="district"
                value={editData.district || '01'} 
                onChange={handleChange}
                readOnly={!isEditing} 
              />
            </div>
            <div className="view-group">
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
              <label>Sync Status</label>
              <input 
                type="text" 
                name="syncStatus"
                value={editData.status || '01'} 
                onChange={handleChange}
                readOnly={!isEditing} 
              />
            </div>
            <div className="view-group">
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
            {isEditing ? (
              <>
                <button type="button" className="cancel-button" onClick={handleEditToggle}>Cancel</button>
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
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: black;
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
        
        .view-group input {
          padding: 8px 12px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          background-color: #fff;
          font-size: 14px;
        }
        
        .view-group input:not([readonly]) {
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

const CityFormModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    cityCode: '',
    city: '',
    state: '',
    district: '',
    zone: '',
    payrollCityCode: '',
    status: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };
 
  const handleClear = () => {
    setFormData({
      cityCode: '',
      city: '',
      state: '',
      district: '',
      zone: '',
      payrollCityCode: '',
      status: '',
    });
  };
 
  if (!isOpen) return null;
 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">City</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cityCode">City Code</label>
            <input
              type="text"
              id="cityCode"
              name="cityCode"
              value={formData.cityCode}
              onChange={handleChange}
              placeholder="Enter City Code"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="district">District</label>
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select District</option>
              <option value="Guntur">Guntur</option>
              <option value="Krishna">Krishna</option>
              <option value="Visakhapatnam">Visakhapatnam</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="zone">Zone</label>
            <select
              id="zone"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              required
            >
              <option value="">Select Zone</option>
              <option value="Updated">Updated</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="payrollCityCode">Payroll City Code</label>
            <input
              type="text"
              id="payrollCityCode"
              name="payrollCityCode"
              value={formData.payrollCityCode}
              onChange={handleChange}
              placeholder="Enter Payroll City Code"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Updated">Updated</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="button" className="clear-button" onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
 
        .modal-content {
          background-color: #fff;
          padding: 24px;
          border-radius: 8px;
          width: 500px;
          max-width: 90%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
 
        .modal-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
        }
 
        .form-group {
          margin-bottom: 16px;
        }
 
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #444;
        }
 
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 14px;
          color: #444;
        }
 
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 24px;
        }
 
        .clear-button,
        .submit-button,
        .cancel-button {
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          border: none;
        }
 
        .clear-button {
          background-color: #f0f0f0;
          color: #444;
        }
 
        .submit-button {
          background-color: #007bff;
          color: #fff;
        }
 
        .cancel-button {
          background-color: #e2e8f0;
          color: #444;
        }
 
        .clear-button:hover,
        .submit-button:hover,
        .cancel-button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};
 
const CityManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [cities, setCities] = useState([
    { cityCode: '01', city: 'Guntur', state: 'Andhra Pradesh', district: 'Guntur', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '01' },
    { cityCode: '02', city: 'Hyderabd', state: 'Telangana', district: 'Hyderabad', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: '02' },
  ]);
 
  const handleAddCity = (newCity) => {
    setCities((prev) => [...prev, { ...newCity, syncDate: 'Updated' }]);
  };
  
  const handleViewCity = (city) => {
    setSelectedCity(city);
    setIsViewModalOpen(true);
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
            onClick={() => setIsModalOpen(true)}
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
 
      <CityFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCity}
      />
      
      <CityViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        cityData={selectedCity || {}}
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
        
        /* Improved table responsive container */
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          margin-bottom: 16px;
          -webkit-overflow-scrolling: touch;
          /* Enhanced scrollbar styles */
          scrollbar-width: thin;
          scrollbar-color: #007bff #f0f0f0;
        }
        
        .table-responsive::-webkit-scrollbar {
          height: 8px;
        }
        
        .table-responsive::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 4px;
        }
        
        .table-responsive::-webkit-scrollbar-thumb {
          background-color: #007bff;
          border-radius: 4px;
        }
 
        .table-container {
          width: 100%;
          border-collapse: collapse;
          min-width: 1200px; /* Ensures table doesn't shrink too much */
        }
 
        .table-container th,
        .table-container td {
          padding: 12px;
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
          color: #007bff;
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
          background-color: #007bff;
          color: #fff;
          border-color: #007bff;
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