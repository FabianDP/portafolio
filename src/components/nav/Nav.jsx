import React, { useState } from 'react';

function NavBar() {
  const [currentPage, setCurrentPage] = useState('Inicio');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handlePageChange('Inicio')}>Inicio</li>
        <li onClick={() => handlePageChange('Acerca')}>Acerca de</li>
        <li onClick={() => handlePageChange('Contacto')}>Contacto</li>
      </ul>
      <div>
        {currentPage === 'Inicio' && <Inicio />}
        {currentPage === 'Acerca' && <Acerca />}
        {currentPage === 'Contacto' && <Contacto />}
      </div>
    </nav>
  );
}

function Inicio() {
  return <h2>Contenido de Inicio</h2>;
}

function Acerca() {
  return <h2>Contenido de Acerca</h2>;
}

function Contacto() {
  return <h2>Contenido de Contacto</h2>;
}

export default NavBar;