import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }: any) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 80,
            itemHeight: 18,
            symbolShape: 'circle',
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
