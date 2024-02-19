import React, { useState } from 'react';


const Formulario = ({ isOpen, onClose, onCreate }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCreate = () => {
    onCreate({ id, nombre, descripcion });
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div >
        <h2 className='TituloDiligenciar'>DILIGENCIAR EL FORMATO</h2>
        <label>ID: </label>
        <input className='IdFormato' type="text" value={id} onChange={(e) => setId(e.target.value)} />
        
        <label>Nombre: </label>
        <input className='IdNombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        
        <label>Descripción: </label>
        <input className='IdDescripcion' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        
        <button className='IdBotonConfirmar' onClick={handleCreate}>Confirmar</button>
        <button className='IdBotonCancelar' onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default Formulario;
