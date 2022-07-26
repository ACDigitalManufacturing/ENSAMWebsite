import { localRoutes } from "./routes";

const MainNavbar = (): JSX.Element => {
  return (
    <ul>
      <a href={localRoutes.home}>Accueil</a>
      <a href={localRoutes.formation}>Formation</a>
      <a href={localRoutes.underRecontruction}>Recherche</a>
      <a href={localRoutes.underRecontruction}>Contact</a>
    </ul>
  );
};

export default MainNavbar;
