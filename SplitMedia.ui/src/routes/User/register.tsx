import PageHeader from "../../components/pageHeader";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import axiosInstanceSecure from "../../api/axiosInstanceSecure";
import ErrorList, { IErrorDetails } from "../../components/errorList";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useCookies } from "react-cookie";

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

type memberPlanType = {
  memberPlanId: string;
  name: string;
  monthlyFee: number;
  annualFee: number;
};

const memberPlansQuery = gql`
  query getMemberPlans {
    memberPlans {
      memberPlanId
      name
      monthlyFee
      annualFee
    }
  }
`;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [plan, setPlan] = useState<null | string>("");
  const [error, setError] = useState<IErrorDetails | null>(null);
  const [, setCookie] = useCookies(["refreshToken"]);
  const [, setAccessCookie] = useCookies(["accessToken"]);

  const navigate = useNavigate();

  const regModel: UserRegistrationModel = {
    password: password,
    email: email,
  };

  var apiErrorResponse: ApiRegErrorResponse | undefined = undefined;

  const requiredFieldsSupplied = () => {
    if (email && password && passwordConfirmation && plan) {
      return true;
    }

    var errors: string[] = [];

    if (!email) {
      errors.push("Email must be entered.");
    }
    if (!password) {
      errors.push("Password must be entered.");
    }
    if (!passwordConfirmation) {
      errors.push("Password Confirmation must be entered.");
    }

    if (!plan) {
      errors.push("Please select a plan.");
    }

    const err: IErrorDetails = {
      title: "One or more validation errors occurred.",
      messages: errors,
    };

    setError(err);

    return false;
  };

  const passwordAndConfirmationMatch = () => {
    if (password === passwordConfirmation) {
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

  const GetMemberPlans = () => {
    const { loading, error, data } = useQuery(memberPlansQuery, {
      notifyOnNetworkStatusChange: true,
    });
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
      <Select
        defaultValue="yyy"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={plan}
        label="Plan"
        onChange={(e) => setPlan(e.target.value)}
      >
        {data.memberPlans.map((memberPlan: memberPlanType) => {
          return (
            <MenuItem
              key={memberPlan.memberPlanId}
              value={memberPlan.memberPlanId}
            >
              {memberPlan.name}
            </MenuItem>
          );
        })}
      </Select>
    );
  };

  const handleRegister = async () => {
    if (!requiredFieldsSupplied()) {
      return;
    }
    if (!passwordAndConfirmationMatch()) {
      return;
    }

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

      await axiosInstanceSecure.post("/SetMembersPlan?MemberPlanId=" + plan);

      navigate("/dashboard");
    } catch (e) {
      console.error("Error: " && e);
    }
  };

  return (
    <>
      <PageHeader />
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Register</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirmation"
                  label="Password Confirmation"
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                  <GetMemberPlans></GetMemberPlans>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ErrorList errorDetail={error}></ErrorList>
      </Container>
    </>
  );
}
