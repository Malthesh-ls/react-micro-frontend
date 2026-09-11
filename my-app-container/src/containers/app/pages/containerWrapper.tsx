import React from 'react';
import { SideNavbar, TopBar } from '../../../components';

interface ContainerWrapperProps {
  children: React.ReactNode;
}

const ContainerWrapper = ({ children }: ContainerWrapperProps) => {
  return (
    <>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar pt-2">
            <SideNavbar />
          </div>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ContainerWrapper;
