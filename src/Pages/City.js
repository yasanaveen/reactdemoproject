import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
// Modal Component for the Form
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
          background-color: rgba(0, 0, 0, 0.5);
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
  const [cities, setCities] = useState([
    { cityCode: '01', city: 'Guntur', state: 'Andhra Pradesh', district: 'Guntur', zone: 'Updated', payrollCityCode: 'Updated', status: 'Updated', syncDate: 'Updated' },
    
  ]);
 
  const handleAddCity = (newCity) => {
    setCities((prev) => [...prev, { ...newCity, syncDate: 'Updated' }]);
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
 
      <table className="table-container">
        <thead>
          <tr>
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
                  <span className="table-action">👁️ View</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
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
 
        .table-container {
          width: 100%;
          border-collapse: collapse;
        }
 
        .table-container th,
        .table-container td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }
 
        .table-container th {
          background-color: #f8f9fa;
          font-weight: 600;
        }
 
        .table-actions {
          display: flex;
          gap: 8px;
        }
 
        .table-action {
          cursor: pointer;
          color: #666;
        }
 
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
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
      `}</style>
    </div>
  );
};
 
export default CityManagementPage;