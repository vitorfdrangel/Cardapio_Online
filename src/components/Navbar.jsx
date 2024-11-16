import { useState } from "react";

// components
import Cart from "./Cart";

import logo from "../images/logo.png";

// style
import classes from "./Navbar.module.css";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={classes.navbar_container}>
      <img src={logo} alt="Logotipo" className={classes.logo} />

      <div className={classes.menu}>
        <a href="#">Histórico</a>
        <button className="btn btn-red" onClick={() => setOpenSidebar(true)}>
          <MdOutlineShoppingBag />
          <p>Sacola</p>
        </button>
      </div>
      <Cart openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
};

export default Navbar;
