import React from 'react';
import { mount } from 'report/ReportApp';
import { useMicroApp } from '../../hooks/useMicroApp';
import { appPrefix } from '../../constants';

const baseName = appPrefix.report;

const ReportApp = () => {
  const [wrapperRef] = useMicroApp('report', baseName, mount);

  return <div ref={wrapperRef} id="report-mfe" />;
};

export default ReportApp;
