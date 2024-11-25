import { toast } from "react-toastify";

// buscar itens
export const useGetProductsLs = () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  return products;
};

// salvar itens
export const useSaveProductsLs = (prod) => {
  const products = useGetProductsLs();

  prod.id = `${prod.id}&${Date.now()}`;

  products.push(prod);

  toast.success("Produto adicionado!", {
    position: "top-center",
    autoClose: 1500,
    pauseOnFocusLoss: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
  });

  localStorage.setItem("products", JSON.stringify(products));
};

// deletar itens
export const useDeleteProductsLs = (prodId, setOrders) => {
  const products = useGetProductsLs();

  const newProducts = products.filter((prod) => prod.id !== prodId);

  setOrders(newProducts);

  localStorage.setItem("products", JSON.stringify(newProducts));
};
