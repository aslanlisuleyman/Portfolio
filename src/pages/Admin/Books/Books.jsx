

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  updateData,deleteData } from '../../../redux/slices/dataSlice';
import { useFormik } from 'formik';
import AddProductModal from './AddProductModal';

const Books = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.api);

  const [editItemId, setEditItemId] = useState(null);

  const handleDeleteClick = (item) => {
    
    dispatch(deleteData({ item }));
  };



  const formik = useFormik({
    initialValues: {
      
      name: '',
      unitPrice: '',
      image:''
      
    },
    onSubmit: (values) => {
     
      dispatch(
        updateData({
          id: editItemId,
          updateData: values,
        })
      );
     
      setEditItemId(null);
    },
  });

  const handleEditClick = (item) => {
   
    setEditItemId(item.id);

   
    formik.setValues({
      name: item.name,
      unitPrice: item.unitPrice,
      image:item.image
      
    });
  };

  return (
    <div style={{backgroundColor:'white'}}>
      
      <AddProductModal  isOpen={isAddModalOpen}  />
      <div className='tab' style={{ backgroundColor: 'white', paddingTop: '40px' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: 'white' }}>
          <thead style={{ height: '50px' }}>
            <tr>
              <th style={tableHeaderStyle}>Image</th>
              <th style={tableHeaderStyle}>Id</th>
              <th style={tableHeaderStyle}>ImageUrl</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Price</th>
              <th style={tableHeaderStyle}>Delete</th>
              <th style={tableHeaderStyle}>Edit</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img style={{ marginLeft: '23%', height: '100px', width: '130px' }} src={item.image} alt='' />
                  </td>
                  <td>
                    <p style={{ marginLeft: '30%' }}> {item.id}</p>
                  </td>
                  <td>
                    {editItemId === item.id ? (
                      <input style={{marginLeft:'35%',width:'300px'}}
                        type='text'
                        name='image'
                        value={formik.values.image}
                        onChange={formik.handleChange}
                      />
                    ) : (
                      
                      <p style={{ marginLeft: '35%' }}>{item.image}</p>
                    )}
                  </td>
                  <td>
                    {editItemId === item.id ? (
                     
                      <input
                        type='text'
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                    ) : (
                     
                      <p style={{ marginLeft: '30%' }}> {item.name}</p>
                    )}
                  </td>
                  <td>
                    {editItemId === item.id ? (
                     
                      <input
                        type='text'
                        name='unitPrice'
                        value={formik.values.unitPrice}
                        onChange={formik.handleChange}
                      />
                    ) : (
                      
                      <p style={{ marginLeft: '35%' }}>{item.unitPrice}</p>
                    )}
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        handleDeleteClick(item);
                      }}
                      className='dele'
                      style={{ marginLeft: '28%', backgroundColor: 'red', height: '35px', borderRadius: '10px' }}
                    >
                      Delete
                    </button>
                  </td>

                  <td>
                    {editItemId === item.id ? (
                      
                      <button
                        onClick={() => {
                          formik.handleSubmit();
                        }}
                        className='upta'
                        style={{ marginLeft: '28%', backgroundColor: 'green', height: '35px', borderRadius: '10px' }}
                      >
                        Save
                      </button>
                    ) : (
                     
                      <button
                        onClick={() => {
                          handleEditClick(item);
                        }}
                        className='upta'
                        style={{ marginLeft: '28%', backgroundColor: 'orange', height: '35px', borderRadius: '10px' }}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  background: 'white',
  color: 'black',
};

export default Books;
