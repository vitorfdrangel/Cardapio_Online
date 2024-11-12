import logo from "../images/logo.png";

// style
import classes from "./Navbar.module.css";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  // Abrir menu lateral
  const openSidebar = () => {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  };

  return (
    <div className={classes.navbar_container}>
      <img src={logo} alt="Logotipo" className={classes.logo} />

      <div className={classes.menu}>
        <a href="#">Histórico</a>
        <button className="btn btn-red" onClick={openSidebar}>
          <MdOutlineShoppingBag />
          <p>Sacola</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
