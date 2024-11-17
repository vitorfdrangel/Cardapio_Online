// buscar itens
export const getProductsLs = () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  return products;
};

// salvar itens
export const saveProductsLs = (prod) => {
  const products = getProductsLs();

  products.push(prod);

  localStorage.setItem("products", JSON.stringify(products));
};

// deletar itens
export const deleteProductsLs = (prodName) => {
  const products = getProductsLs();

  const newProducts = products.filter((prod) => prod.name !== prodName);

  localStorage.setItem("products", JSON.stringify(newProducts));
};
