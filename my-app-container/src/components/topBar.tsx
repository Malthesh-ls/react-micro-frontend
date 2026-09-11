import React from 'react';
import { Navbar } from 'react-bootstrap';

const TopBar = () => {
  return (
    <Navbar expand="lg" className="" bg="primary" sticky="top">
      <Navbar.Brand href="#" className="col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
        Micro App
      </Navbar.Brand>
    </Navbar>
  );
};

export default TopBar;
