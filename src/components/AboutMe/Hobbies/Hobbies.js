import React from 'react';

const Hobbies = () => {
  return (
    <section className='hobbies'>
      <h2>Aficiones</h2>
      <div>
        <h4>Lectura</h4>
        <ul>
          <li>Ciencia Ficción</li>
          <li>Aventura</li>
          <li>Romance</li>
          <li>Policíaca/Terror/Suspense</li>
          <li>Histórico</li>
        </ul>
      </div>
      <div>
        <h4>Pintura</h4>
        <ul>
          <li>Lienzos óleo/acrílico</li>
          <li>Lettering</li>
          <li>Mano alzada</li>
        </ul>
      </div>
      <div>
        <h4>Digital</h4>
        <ul>
          <li>Programación</li>
          <li>Diseño Gráfico</li>
          <li>Edición</li>
        </ul>
      </div>
      <div>
        <h4>Fotografía</h4>
        <ul>
          <li>Cámara Digital</li>
          <li>Cámara Reflex</li>
          <li>Móvil</li>
        </ul>
      </div>
    </section>
  );
};

export default Hobbies;
