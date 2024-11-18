// hooks
import { useSaveProductsLs } from "../hooks/useLocalStorage";

// data
import data from "../help/data";

// style
import classes from "./ProdVitrine.module.css";
import { FaBagShopping } from "react-icons/fa6";

const ProdVitrine = () => {
  return (
    <div className={classes.prodVitrine_container}>
      {data &&
        data.map((prod) => (
          <div className={classes.prod_box} key={prod.id}>
            <img src={prod.img} alt={prod.name} />
            <h2>{prod.name}</h2>
            <p className={classes.description}>{prod.description}</p>
            <p className={classes.price}>{prod.price}</p>
            <div>
              <button
                className="btn btn-cart"
                onClick={() => useSaveProductsLs(prod)}
              >
                <FaBagShopping />
                <span>Adicionar</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProdVitrine;
