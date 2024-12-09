import { useState } from "react";
import { IErrorDetails } from "../../../../components/errorList";
import { useNavigate, useSearchParams } from "react-router-dom";
import RegisterForm from "./registerForm";
import { useAuth } from "../../../../Context/useAuth";

export type IRegistrationData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const RegistrationData: IRegistrationData = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default function Register() {
  const { registerUser } = useAuth();
  const [error, setError] = useState<IErrorDetails | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requiredFieldsSupplied = () => {
    if (
      RegistrationData.email &&
      RegistrationData.password &&
      RegistrationData.passwordConfirmation
    ) {
      return true;
    }

    var errors: string[] = [];

    if (!RegistrationData.email) {
      errors.push("Email must be entered.");
    }
    if (!RegistrationData.password) {
      errors.push("Password must be entered.");
    }
    if (!RegistrationData.passwordConfirmation) {
      errors.push("Password Confirmation must be entered.");
    }

    const err: IErrorDetails = {
      title: "One or more validation errors occurred.",
      messages: errors,
    };

    setError(err);

    return false;
  };

  const passwordAndConfirmationMatch = () => {
    if (RegistrationData.password === RegistrationData.passwordConfirmation) {
      return true;
    }

    var errors: string[] = [];

    errors.push("Password and confirmation must be the same.");

    const err: IErrorDetails = {
      title: "One or more validation errors occurred.",
      messages: errors,
    };

    setError(err);

    return false;
  };

  const handleRegister = async () => {
    if (!requiredFieldsSupplied()) {
      return;
    }
    if (!passwordAndConfirmationMatch()) {
      return;
    }

    await registerUser(RegistrationData.email, RegistrationData.password);

    const selectedPlanId = searchParams.get("mp");
    navigate("/select-plan?mp=" + selectedPlanId);
  };

  return (
    <>{<RegisterForm callbackFunction={handleRegister} errorProp={error} />}</>
  );
}
