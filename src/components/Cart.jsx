import { Dock } from "react-dock";

import { MdOutlineClose } from "react-icons/md";

// Style
import classes from "./Cart.module.css";

const Cart = ({ openSidebar, setOpenSidebar }) => {
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

        <div className={classes.product_list}>
          <p>Produto 1</p>
          <p>Produto 2</p>
        </div>

        <div>
          <p>
            Total <span>R$ 120,00</span>
          </p>
        </div>

        <button>Finalizar Pedido</button>
      </div>
    </Dock>
  );
};

export default Cart;
