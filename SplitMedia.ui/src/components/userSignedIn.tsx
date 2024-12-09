import Parser from "html-react-parser";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/useAuth";

export default function UserSignedIn() {
  const { isLoggedIn } = useAuth();
  const [myAccountText, setMyAccountText] = useState(
    '<a className="nav-link" href="/Login">Sign In</a>'
  );

  function getBasicInfo() {
    const loggedIn = isLoggedIn();

    if (loggedIn) {
      setMyAccountText(
        '<a className="nav-link" href="/my-account">My Account</a>'
      );
      return;
    }
  }

  useEffect(() => {
    getBasicInfo();
  }, []);

  return <>{Parser(myAccountText)}</>;
}
