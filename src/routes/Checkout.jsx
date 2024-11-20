// style
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={classes.checkout_container}>
      <h1>Finalizar Pedido</h1>

      <div className={classes.body_checkout}>
        <div className={classes.box_container}>
          <h3>Dados Pessoais</h3>

          <div className={classes.box_input}>
            <label>
              <span>Nome Completo</span>
              <input type="text" />
            </label>
          </div>
        </div>

        <div className={classes.box_container}>
          <h3>Dados Pessoais</h3>

          <div className={classes.box_input}>
            <label>
              <span>Nome Completo</span>
              <input type="text" />
            </label>
          </div>
        </div>

        <div className={classes.box_container}>
          <h3>Dados Pessoais</h3>

          <div className={classes.box_input}>
            <label>
              <span>Nome Completo</span>
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
