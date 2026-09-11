import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/productSlice';
import { getProducts } from '../../services';

interface ProfileWrapperProps {
  children: React.ReactNode;
}

const ReportsWrapper = ({ children }: ProfileWrapperProps) => {
  const dispatch = useDispatch();

  const handleOnLoad = async () => {
    try {
      const result = await getProducts();
      const products = result?.data ?? [];
      dispatch(setProducts(products));
    } catch (error) {
      dispatch(setProducts([]));
    }
  };

  useEffect(() => {
    handleOnLoad();
  }, []);

  return <div className="container mt-3 mb-3">{children}</div>;
};

export default ReportsWrapper;
