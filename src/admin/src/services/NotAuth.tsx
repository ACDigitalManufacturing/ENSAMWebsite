import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import localRoutes from "routes/routes";
import { rootStateType } from "store/reducers";

interface Props {
  redirect?: localRoutes;
  component(): JSX.Element;
}

const NotAuth = function ({
  component: Component,
  redirect = localRoutes.dashboard,
}: Props): JSX.Element {
  const { isLoggedIn } = useSelector((state: rootStateType) => state.admin);
  return !isLoggedIn ? <Component /> : <Navigate to={{ pathname: redirect }} />;
};

export default NotAuth;
