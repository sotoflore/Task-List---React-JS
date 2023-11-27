import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ( {addTodo} ) => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    descripcion: "Descripcion #01",
    state: "pendiente",
    priority:true,
  });

  const { title, descripcion, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    // pequeña validación
    if (!title.trim() || !descripcion.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y Descripción son obligatorios",
        });
    }

    addTodo({
        id: Date.now(),
        ...todo,
        state: state === 'completado'
    })

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Todo agregado correctamente",
        showConfirmButton: false,
        timer: 1500
    });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    
    setTodo({
        ...todo,
        [name]: type === 'checkbox' ? checked : value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese una Descripción"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="priority"
            className="form-check-input"
            id="inputCheck"
            checked={priority}
            onChange={handleChange}            
          />
          <label className="form-check-label" htmlFor="inputCheck">
            Dar prioridad
          </label>
        </div>
        <select
          className="form-control mb-2"
          name="state"
          value={state}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
  );
};
export default Formulario;
