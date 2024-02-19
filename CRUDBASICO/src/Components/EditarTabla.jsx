import React, { useState, useEffect } from 'react';

const EditarTabla = ({ isOpen, onClose, onUpdate, selectedData }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (selectedData) {
      setId(selectedData.id);
      setNombre(selectedData.nombre);
      setDescripcion(selectedData.descripcion);
    }
  }, [selectedData]);

  const handleUpdate = () => {
    onUpdate({ id, nombre, descripcion });
    onClose();
  };

  return (
  <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div>
      <table className='TablaHead'>
            <thead >
              <th>ID</th>
              <th>NOMBRE</th>
              <th>DESCRIPCION</th>
              <th>ACCIONES</th>
              
            </thead>
            <tbody>

            </tbody>
              <td><input className='TablaHeadId' type="text" value={id} readOnly /></td>
              <td><input className='TablaHeadNombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /></td>
              <td><input className='TablaHeadDescripcion' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} /></td>

            
              <button className='BotonActualizarTabla' onClick={handleUpdate}>Actualizar</button>
              <button className='BotonCancelarTabla' onClick={onClose}>Cancelar</button>


          </table>

              </div>
    </div>
  );
};

export default EditarTabla;


      {/*<h2>Editar Registro</h2>
        <label>ID: </label>
        <input type="text" value={id} readOnly />
        <br />
        <label>Nombre: </label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label>Descripción: </label>
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <br />
        <button onClick={handleUpdate}>Actualizar</button>
        <button onClick={onClose}>Cancelar</button>
*/}