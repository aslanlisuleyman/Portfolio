

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../../../redux/slices/dataSlice';

const AddProductModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ id: '', name: '', unitPrice: '', image: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddClick = () => {
    if (!formData.id || !formData.name || !formData.unitPrice || !formData.image) {
        alert('Zəhmət olmasa boşluqları doldurun');
        return;
      }
    dispatch(addData({ item: formData }));
    setFormData({ id: '', name: '', unitPrice: '', image: '' }); 
    onClose(); 
  };

  return (
    <div style={{ paddingTop: '80px', marginLeft: '20%' }} className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2 style={{ marginLeft: '35%', paddingBottom: '40px' }}>Add Product</h2>
        <label>
          ID:
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Unit Price:
          <input type="text" name="unitPrice" value={formData.unitPrice} onChange={handleInputChange} />
        </label>
        <label>
          Image:
          <input type="text" name="image" value={formData.image} onChange={handleInputChange} />
        </label>
        <button
          style={{ backgroundColor: 'green', color: 'white', height: '30px', marginLeft: '20px', borderRadius: '5px' }}
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;
