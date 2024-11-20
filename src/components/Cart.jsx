// hooks
import { useEffect, useState } from "react";
import {
  useGetProductsLs,
  useDeleteProductsLs,
} from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

// sidebar
import { Dock } from "react-dock";

// Style
import classes from "./Cart.module.css";
import { MdOutlineClose } from "react-icons/md";

const Cart = ({ openSidebar, setOpenSidebar }) => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState();

  const navigate = useNavigate();

  // carregar produtos no cart
  useEffect(() => {
    const productsLs = useGetProductsLs();
    setOrders(productsLs);
  }, [openSidebar]);

  // somar valor total do carrinho
  useEffect(() => {
    let smtotal = 0;

    const somaTotal = () => {
      const ordersLs = useGetProductsLs();

      if (ordersLs) {
        ordersLs.map((order) => {
          const priceMod = order.price.replace(",", ".");
          const price = parseFloat(priceMod);

          smtotal = smtotal + price;
        });
      }

      smtotal = smtotal.toFixed(2).replace(".", ",");
    };

    somaTotal();
    setTotal(smtotal);
  }, [orders, openSidebar]);

  const finalizeOrder = () => {
    if (total !== "0,00") {
      navigate("/checkout");

      setOpenSidebar(false);
    }

    return;
  };

  return (
    <Dock
      position="right"
      isVisible={openSidebar}
      fluid={false}
      size={430}
      onVisibleChange={(visible) => {
        setOpenSidebar(visible);
      }}
    >
      <div className={classes.cart_container}>
        <MdOutlineClose onClick={() => setOpenSidebar(false)} />
        <h1>Meu Pedido</h1>

        <div className={classes.product_container}>
          {orders.length === 0 ? (
            <p className={classes.void_cart}>Seu carrinho está vazio!</p>
          ) : (
            orders.map((order) => (
              <div className={classes.product} key={order.id}>
                <img src={order.img} alt={order.name} />
                <div className={classes.body_product}>
                  <p className={classes.product_name}>{order.name}</p>
                  <p className={classes.product_desc}>{order.description}</p>
                  <p className={classes.product_price}>{order.price}</p>
                  <button
                    onClick={() => useDeleteProductsLs(order.id, setOrders)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={classes.footer_cart}>
          <div className={classes.total_cart}>
            <p>Total:</p>
            <p>R${total}</p>
          </div>
          <button onClick={finalizeOrder}>Finalizar Pedido</button>
        </div>
      </div>
    </Dock>
  );
};

export default Cart;
