import { useState, useEffect } from "react";
import { Dock } from "react-dock";

// Style
import classes from "./Cart.module.css";

const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <div>
        <h1>Meu Pedido</h1>
      </div>
    </Dock>
  );
};

export default Cart;
