import classes from "./Navbar.module.css";

import logo from "../images/logo.png";
import bag from "../images/bag.png";

const Navbar = () => {
  return (
    <div className={classes.navbar_container}>
      <img src={logo} alt="Logotipo" className={classes.logo} />

      <div className={classes.menu}>
        <a href="#">Histórico</a>
        <button className="btn btn-red">
          <img src={bag} alt="Sacola" />
          <p>Sacola</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
