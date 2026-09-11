import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ data }: any) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy="label"
        margin={{ top: 50, right: 130, bottom: 50, left: 110 }}
        padding={0.4}
        valueScale={{ type: 'linear' }}
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'value',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        layout="horizontal"
        axisLeft={null}
      />
    </div>
  );
};

export default BarChart;
