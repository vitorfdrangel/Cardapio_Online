import { useEffect, useState } from "react";

// hooks
import { getProductsLs } from "../hooks/useLocalStorage";

import { Dock } from "react-dock";

// Style
import classes from "./Cart.module.css";
import { MdOutlineClose } from "react-icons/md";

const Cart = ({ openSidebar, setOpenSidebar }) => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    const productsLs = getProductsLs();
    setOrders(productsLs);
  }, [openSidebar]);

  return (
    <Dock
      position="right"
      isVisible={openSidebar}
      fluid={false}
      size={500}
      onVisibleChange={(visible) => {
        setOpenSidebar(visible);
      }}
    >
      <div className={classes.cart_container}>
        <MdOutlineClose onClick={() => setOpenSidebar(false)} />
        <h1>Meu Pedido</h1>

        <div className={classes.product_container}>
          {orders.length === 0 ? (
            <p>Seu carrinho está vazio!</p>
          ) : (
            orders.map((order) => (
              <div className={classes.product} key={order.name}>
                <img src={order.img} alt={order.name} />
                <div className={classes.body_product}>
                  <p className={classes.product_name}>{order.name}</p>
                  <p className={classes.product_desc}>{order.description}</p>
                  <p className={classes.product_price}>{order.price}</p>
                  <button>Remover</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={classes.footer_cart}>
          <div className={classes.total_cart}>
            <p>Total:</p>
            <p>R$ 45,90</p>
          </div>
          <button>Finalizar Pedido</button>
        </div>
      </div>
    </Dock>
  );
};

export default Cart;
