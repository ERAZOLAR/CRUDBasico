import React, { useState } from 'react';
import Tabla from './Components/Tabla'
import Formulario from './Components/Formulario'; 
import EditarTabla from './Components/EditarTabla';
import './App.css'


const App = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const Crear = (newData) => {
    setData([...data, { ...newData, id: Date.now().toString() }]);
  };

  const Editar = (editedData) => {
    const updatedData = data.map((item) => (item.id === editedData.id ? editedData : item));
    setData(updatedData);
  };

  const Borrar = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const Edicion = (selected) => {
    setSelectedData(selected);
    setEditModalOpen(true);
  };

  return (
    <div className='PaginaInicio'>
      <h3 className='Titulo'>! REGISTRAR INFORMACION !</h3>
      <Formulario />
      
      
      <Tabla data ={data} onEdit={Edicion} onDelete={Borrar} />
      
      <Formulario isOpen={isCreateModalOpen} onClose={() => setCreateModalOpen(false)} onCreate={Crear} />

      <button className='BotonInicio' onClick={() => setCreateModalOpen(true)}>Nuevo Registro</button>

      {selectedData && (
        <EditarTabla
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdate={Editar}
          selectedData={selectedData}
        />
      
      )}
    </div>
  );
};

export default App;

