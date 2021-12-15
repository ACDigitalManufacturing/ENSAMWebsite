import { localRoutes } from "./routes";

const MainNavbar = (): JSX.Element => {
  return (
    <ul>
      <a href={localRoutes.home}>Accueil</a>
      <a href={localRoutes.underRecontruction}>Formation</a>
      <a href={localRoutes.underRecontruction}>Entreprise</a>
      <a href={localRoutes.underRecontruction}>Recherche</a>
    </ul>
  );
};

export default MainNavbar;
