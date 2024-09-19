import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.boxHome}>
      <div className={css.boxInfo}>
        <h1 className={css.titleHome}>
          Welcome to the AutoRental web application
        </h1>
        <p className={css.infoPage}>
          We are well aware that not all people have the financial means to buy
          a car, and our web application is designed for people who need a car
          for their own purposes.
        </p>
        <p className={css.infoPage}>
          In the Catalog section, you can view the cars that are available for
          rent, view full information about the car: mileage, rental price per
          hour, model year, and much more.
          <br /> You can also add your favorites to the section by clicking on
          the icon on the car card. <br />
          The service has brand filtering for your convenience, where you can
          choose the brand you want to see.
        </p>
        <p className={css.infoPage}>
          We hope you will like our app and use it everyday, thank you ;)
        </p>
      </div>
    </div>
  );
};

export default HomePage;
