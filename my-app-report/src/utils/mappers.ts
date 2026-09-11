
export const productPieChartDataMapper = (products: any[] | null | undefined, categories: any) => {
  if (!Array.isArray(products)) {
    return []; 
  }
  if (products === null || products === undefined) {
    return [];
  }
  if (!products || products.length === 0) {
    return [];
  }
  const resArr: any[] = [];

  categories.forEach((category: string, index: Number) => {
    let stock = 0;
    products.map((product: any) => {
      if (category === product.category) {
        stock += product.stock;
      }
    });
    resArr.push({
      id: index,
      label: category,
      value: stock,
    })
  });
  return resArr
}

export const productBarChartDataMapper = (products: any[] | null | undefined, brands: any) => {
  if (!Array.isArray(products)) {
    return []; 
  }
  if (products === null || products === undefined) {
    return [];
  }
  if (!products || products.length === 0) {
    return [];
  }
  const resArr: any[] = [];

  brands.forEach((b: string, i: Number) => {
    let stock = 0;
    products.map((item: any) => {
      if (item.brand === b) {
        stock += item.stock;
      }
    });
    resArr.push({
      id: i,
      label: b,
      value: stock,
    });
  });
  return resArr
}
