// style
import classes from "./Checkout.module.css";

const Checkout = () => {
  // remover menu navbar
  const evClose = new CustomEvent("closeMenu");
  if (window.focus) {
    dispatchEvent(evClose);
  }

  // validar somente números
  const numValidator = (e) => {
    const num = e.keyCode || e.which;

    if (
      (num > 47 && num < 58) ||
      (num > 7 && num < 19) ||
      (num > 36 && num < 41)
    ) {
      return true;
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className={classes.checkout_container}>
      <h1>Finalizar Pedido</h1>

      <div className={classes.body_checkout}>
        <div className={classes.box_container}>
          <h3>Dados Pessoais</h3>

          <div className={classes.box_input}>
            <label>
              <span>Nome Completo</span>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                required
              />
            </label>

            <label>
              <span>E-mail</span>
              <input
                type="email"
                placeholder="ex: usuario@gmail.com"
                required
              />
            </label>

            <label>
              <span>Celular</span>
              <input
                type="text"
                placeholder="ex: 21983746536"
                maxLength={11}
                onKeyDown={(e) => numValidator(e)}
                required
              />
            </label>
          </div>
        </div>

        <div className={classes.box_container}>
          <h3>Endereço de Entrega</h3>

          <div className={classes.box_input}>
            <label>
              <span>UF</span>
              <select required>
                <option value="RJ" checked>
                  Rio de Janeiro
                </option>
                <option value="SP">São Paulo</option>
                <option value="ES">Espírito Santo</option>
                <option value="MG">Minas Gerais</option>
              </select>
            </label>

            <label>
              <span>Cidade</span>
              <input type="text" placeholder="Nome da sua Cidade" required />
            </label>

            <label>
              <span>Bairro</span>
              <input type="text" placeholder="Digite seu bairro" required />
            </label>

            <label>
              <span>Endereço</span>
              <input type="text" placeholder="Digite seu endereço" required />
            </label>
          </div>
        </div>

        <div className={classes.box_container}>
          <h3>Dados do Pagamento</h3>

          <div className={classes.checkout_values}>
            <p>Total</p>
            <p>R$ 50,00</p>
          </div>
          <button className="btn-checkout">Finalizar Pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
