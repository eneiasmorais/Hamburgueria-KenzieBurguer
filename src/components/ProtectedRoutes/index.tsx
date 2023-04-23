import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthUserContext } from "../../providers/userContext";
import { AuthCartProvider } from "../../providers/cartContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(AuthUserContext);

  return user ? (
    <AuthCartProvider>
      <Outlet />
    </AuthCartProvider>
  ) : (
    <Navigate to="/" />
  );
};
