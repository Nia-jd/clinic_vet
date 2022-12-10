import React, { useState } from "react";

export default function Registro() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h1 className="h2">Datos de la mascota</h1>

      <form className="container" onSubmit={handleSubmit}>
        <div className="center">
        <label className="label" htmlFor="nombre">Nombre de la mascota:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="input"
          value={form.nombre}
          onChange={handleChange}
        />
    
        <label className="label" htmlFor="tamaño">Tamaño:</label>
        <input
          type="text"
          id="tamaño"
          name="tamaño"
          className="input"
          value={form.tamaño}
          onChange={handleChange}
        />

        <label className="label" htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          className="input"
          value={form.color}
          onChange={handleChange}
        />
      
        <label className="label" htmlFor="edad">Edad:</label>
        <input
          type="text"
          id="edad"
          name="edad"
          className="input"
          value={form.edad}
          onChange={handleChange}
        />
        <p className="label">Especie</p>
        <select name="especie" className="input" onChange={handleChange} defaultValue="">
          <option value="">Ingresa el tipo de especie</option>
          <option value="canino">Canino</option>
          <option value="felino">Felino</option>
          <option value="equino">Equino</option>
          <option value="ave">Ave</option>
          <option value="reptil">Reptil</option>
          <option value="pez">Pez</option>
        </select>
  
        <p className="label">Genero</p>
        <input
          className="input1"
          type="radio"
          id="hembra"
          name="genero"
          value="hembra"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="hembra"> Hembra </label>
        <br/>
        <input
        className="input1"
          type="radio"
          id="macho"
          name="genero"
          value="macho"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="macho"> Macho </label>
        <br />
        <input type="submit" className="button" />

        </div>
      </form>
    </>
  );
}