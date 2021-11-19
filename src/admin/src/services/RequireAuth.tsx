import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import localRoutes from "routes/routes";
import { rootStateType } from "store/reducers";

interface Props {
  redirect?: localRoutes;
  component(): JSX.Element;
}
const RequireAuth = ({
  component: Component,
  redirect = localRoutes.loginPage,
}: Props): JSX.Element => {
  const { isLoggedIn } = useSelector((state: rootStateType) => state.admin);
  return isLoggedIn ? <Component /> : <Navigate to={{ pathname: redirect }} />;
};

export default RequireAuth;
