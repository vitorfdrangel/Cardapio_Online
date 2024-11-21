// style
import classes from "./Historic.module.css";

const Historic = () => {
  // mostrar menu navbar
  const evShow = new CustomEvent("showMenu");
  if (window.focus) {
    dispatchEvent(evShow);
  }

  return (
    <div className={classes.historic_container}>
      <h1>Histórico de Pedidos</h1>

      <div>
        <table className={classes.table_historic}>
          <tr>
            <td>
              <strong>Pedido 3383834</strong>
            </td>
            <td className={classes.date_hist}>14/01/2024</td>
            <td className={classes.value_hist}>R$ 50,00</td>
          </tr>

          <tr>
            <td>
              <strong>Pedido 3383834</strong>
            </td>
            <td className={classes.date_hist}>14/01/2024</td>
            <td className={classes.value_hist}>R$ 50,00</td>
          </tr>

          <tr>
            <td>
              <strong>Pedido 3383834</strong>
            </td>
            <td className={classes.date_hist}>14/01/2024</td>
            <td className={classes.value_hist}>R$ 50,00</td>
          </tr>

          <tr>
            <td>
              <strong>Pedido 3383834</strong>
            </td>
            <td className={classes.date_hist}>14/01/2024</td>
            <td className={classes.value_hist}>R$ 50,00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Historic;
