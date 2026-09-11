import React from 'react';
import { BarChart, PieChart } from '../../components';
import { useSelector } from 'react-redux';
import { productPieChartDataMapper, productBarChartDataMapper } from '../../utils/mappers';

const ReportsLanding = () => {
  const { product } = useSelector((state: any) => state);

  const uniqueCategoryNames: string[] = product.data
    .map((p: any) => p.category)
    .filter(
      (category: string, index: number, categories: string[]) =>
        categories.indexOf(category) === index,
    );

  const uniquBrandNames: string[] = product.data
    .map((p: any) => p.brand)
    .filter((brand: string, index: number, brands: string[]) => brands.indexOf(brand) === index);

  return (
    <>
      <h3>Reports</h3>
      <div className="row">
        <div className="col-md-5">
          {product.data.length > 0 && (
            <>
              <PieChart data={productPieChartDataMapper(product?.data, uniqueCategoryNames)} />
              <span>Products catagory in stock</span>
            </>
          )}
        </div>
        <div className="col-md-7">
          {product.data.length > 0 && (
            <>
              <BarChart data={productBarChartDataMapper(product?.data, uniquBrandNames)} />
              <span>Products catagory in stock</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReportsLanding;
