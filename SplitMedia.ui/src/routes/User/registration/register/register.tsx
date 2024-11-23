import { useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";
import { IErrorDetails } from "../../../../components/errorList";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import RegisterForm from "./registerForm";

type UserRegistrationModel = {
  email: string;
  password: string;
};

type AuthToken = {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
};

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
  const [error, setError] = useState<IErrorDetails | null>(null);
  const [, setCookie] = useCookies(["refreshToken"]);
  const [, setAccessCookie] = useCookies(["accessToken"]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  var apiErrorResponse: ApiRegErrorResponse | undefined = undefined;

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

    const regModel: UserRegistrationModel = {
      password: RegistrationData.password,
      email: RegistrationData.email,
    };

    try {
      await axiosInstance.post("/register", regModel).catch(function (error) {
        const jsonString = JSON.stringify(error.response.data);
        apiErrorResponse = JSON.parse(jsonString);

        if (apiErrorResponse) {
          var errors: string[] = [];

          for (const errorCode in apiErrorResponse.errors) {
            const errorDetails = apiErrorResponse.errors[errorCode];
            errorDetails.forEach((detail) => errors.push(String(detail)));
          }

          const err: IErrorDetails = {
            title: apiErrorResponse.title,
            messages: errors,
          };

          setError(err);
          return;
        }
      });

      const response = await axiosInstance.post("/login", regModel);
      const authData: AuthToken = response.data;

      setCookie("refreshToken", authData.refreshToken);
      setAccessCookie("accessToken", authData.accessToken);

      const selectedPlanId = searchParams.get("mp");

      navigate("/select-plan?mp=" + selectedPlanId);
    } catch (e) {}
  };

  return (
    <>{<RegisterForm callbackFunction={handleRegister} errorProp={error} />}</>
  );
}
