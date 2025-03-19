import { useEffect } from "react";
import { useAuth } from "../../Context/useAuth";

export default function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();

    window.location.href = "/login";
  }, []);

  return <>Logging out...</>;
}
