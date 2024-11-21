import { useState } from "react";
import { Link } from "react-router-dom";

// components
import Cart from "./Cart";

import logo from "../images/logo.png";

// style
import classes from "./Navbar.module.css";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  addEventListener("showMenu", () => {
    setShowMenu(true);
  });

  return (
    <div className={classes.navbar_container}>
      <a href="/" className={classes.logo}>
        <img src={logo} alt="Logotipo" />
      </a>

      {showMenu && (
        <div className={classes.menu}>
          <Link to={"/historico"}>Histórico</Link>
          <button className="btn btn-red" onClick={() => setOpenSidebar(true)}>
            <MdOutlineShoppingBag />
            <p>Sacola</p>
          </button>
        </div>
      )}

      <Cart
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        setShowMenu={setShowMenu}
      />
    </div>
  );
};

export default Navbar;
