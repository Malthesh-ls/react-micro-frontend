import React from 'react';
import { Nav } from 'react-bootstrap';

const SideNavbar = () => {
  return (
    <Nav
      defaultActiveKey=""
      className="flex-column bg-body-tertiary"
      style={{ minHeight: '100vh' }}
    >
      <Nav.Link href="/">Dashboard</Nav.Link>
      <Nav.Link href="/profile">Users</Nav.Link>
      <Nav.Link href="/report">Report</Nav.Link>
    </Nav>
  );
};

export default SideNavbar;
