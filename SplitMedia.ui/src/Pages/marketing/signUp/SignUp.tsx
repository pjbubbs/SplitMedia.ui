import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const navigate = useNavigate();

  async function submitData(formData: ISignUp) {
    await axiosInstance
      .post("/AddEmailSignUp", formData)
      .then(() => {
        navigate("/signup-thank-you");
      })
      .catch((error) => {
        console.log("error message " + error);
        if (error === "authError") {
          navigate("/Login");
        }
      });
  }

  return (
    <>
      <SignUpForm handleClick={submitData} />
    </>
  );
}
