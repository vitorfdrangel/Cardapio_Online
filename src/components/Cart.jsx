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
          const price = order.price * order.qtd;

          smtotal = smtotal + price;
        });
      }
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

  // atualizar numero de itens
  const setBtn = (op, order) => {
    const products = useGetProductsLs();

    products.map((prod) => {
      if (prod.id === order.id) {
        if (op === "+") {
          prod.qtd++;
        } else if (op === "-" && order.qtd > 1) {
          prod.qtd--;
        } else return;
      }

      setOrders(products);

      localStorage.setItem("products", JSON.stringify(products));
    });
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
                  <div className={classes.qtd_btn}>
                    <button
                      onClick={() => setBtn("-", order)}
                      className={order.qtd === 1 ? "gray" : ""}
                    >
                      -
                    </button>
                    <span>{order.qtd}</span>
                    <button onClick={() => setBtn("+", order)}>+</button>
                  </div>
                  <p className={classes.product_price}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(order.price)}
                  </p>
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

        {orders.length !== 0 && (
          <div className={classes.footer_cart}>
            <div className={classes.total_cart}>
              <p>Total:</p>
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </p>
            </div>
            <button className="btn-checkout" onClick={finalizeOrder}>
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </Dock>
  );
};

export default Cart;
