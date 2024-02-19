import React from 'react';


const Tabla = ({ data, onEdit, onDelete }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <table>
            <thead className='RegistroTabla'>
                <th className='RegistroId'>ID</th>
                <th className='RegistroNombre'>NOMBRE</th>
                <th className='RegistroDescripcion'>DESCRIPCION</th>
                <th className='RegistroAcciones'>ACCIONES</th>
              
            </thead>
            <tbody>

            </tbody>
            {/*<td>ID: {item.id}</td>*/}
            <td className='ItemId'>{item.id}</td>
            {/*<p>Nombre: {item.nombre}</p>*/}
            <td className='ItemNombre'>{item.nombre}</td>
            {/*<p>Descripción: {item.descripcion}</p>*/}
            <td className='ItemDescripcion'>{item.descripcion}</td>
            <button className='BotonEditar' onClick={() => onEdit(item)}>Editar</button>
            <button className='BotonEliminar' onClick={() => onDelete(item.id)}>Eliminar</button>


          </table>

                  </div>
      ))}
    </div>
  );
};

export default Tabla;


{/*<p>ID: {item.id}</p>
          <p>Nombre: {item.nombre}</p>
          <p>Descripción: {item.descripcion}</p>
          <button onClick={() => onEdit(item)}>Editar</button>
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
*/}