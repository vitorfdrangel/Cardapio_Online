// hooks
import { useSetMenu } from "../hooks/useShowMenu";

// data
import orders from "../../data/historic";

// style
import classes from "./Historic.module.css";

const Historic = () => {
  // mostrar menu navbar
  useSetMenu(true);

  return (
    <div className={classes.historic_container}>
      <h1>Histórico de Pedidos</h1>

      <table className={classes.table_historic}>
        {orders.length != 0 ? (
          orders.map((order) => (
            <tbody key={order.id_pedido}>
              <td>
                <strong>{order.id_pedido}</strong>
              </td>
              <td className={classes.date_hist}>{order.date}</td>
              <td className={classes.value_hist}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(order.total)}
              </td>
            </tbody>
          ))
        ) : (
          <p>Você não tem pedidos!</p>
        )}
      </table>
    </div>
  );
};

export default Historic;
