import Parser from "html-react-parser";
import { useState, useEffect } from "react";
import isLoggedIn from "../commonData/user/isLoggedIn";

export default function UserSignedIn() {
  const [myAccountText, setMyAccountText] = useState(
    '<a className="nav-link" href="/Login">Sign In</a>'
  );

  useEffect(() => {
    async function getBasicInfo() {
      const loggedIn = await isLoggedIn();

      if (loggedIn) {
        setMyAccountText(
          '<a className="nav-link" href="/my-account">My Account</a>'
        );
        return;
      }
    }
    getBasicInfo();
  }, []);

  return <>{Parser(myAccountText)}</>;
}
