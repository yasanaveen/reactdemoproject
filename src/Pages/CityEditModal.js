import React, { useState } from 'react';

const CityEditModal = ({ isOpen, onClose, cityData, onEdit, onDelete }) => {
  const [editData, setEditData] = useState(cityData || {});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    onEdit(editData);
    onClose();
  };

  const handleDelete = () => {
    onDelete(cityData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>View</h2>
          <button onClick={onClose} className="close-button">×</button>
        </div>
        <div className="modal-body">
          <div className="form-grid">
            <div className="form-group">
              <label>City ID</label>
              <input type="text" name="cityCode" value={editData.cityCode || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>City Code</label>
              <input type="text" name="cityCode" value={editData.cityCode || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>City Name</label>
              <input type="text" name="city" value={editData.city || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Status</label>
              <input type="text" name="status" value={editData.status || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>District ID</label>
              <input type="text" name="district" value={editData.district || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Zone ID</label>
              <input type="text" name="zone" value={editData.zone || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Payroll City Code</label>
              <input type="text" name="payrollCityCode" value={editData.payrollCityCode || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Sync Status</label>
              <input type="text" name="syncStatus" value={editData.syncStatus || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Sync Date</label>
              <input type="text" name="syncDate" value={editData.syncDate || ''} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="delete-button" onClick={handleDelete}>Delete</button>
          <button className="edit-button" onClick={handleEdit}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default CityEditModal;
