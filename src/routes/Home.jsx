import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.menu_container}>
        <h1 className={classes.title}>Nosso Cardápio</h1>
        <p className={classes.subtitle}>
          Clique em adicionar para colocar os produtos na sacola de compras. Se
          preferir, você pode pedir pelo nosso WhatsApp: (xx) XXXXX-XXXX
        </p>
      </div>
    </div>
  );
};

export default Home;
