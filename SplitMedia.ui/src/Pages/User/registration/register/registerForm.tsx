import PageHeader from "../../../../components/pageHeader";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ErrorList, { IErrorDetails } from "../../../../components/errorList";
import { RegistrationData } from "./register";

interface registrationFormProps {
  callbackFunction: () => void;
  errorProp: IErrorDetails | null;
}

const RegisterForm: React.FC<registrationFormProps> = ({
  callbackFunction,
  errorProp,
}) => {
  const submitData = () => {
    RegistrationData.email = (
      document.getElementById("email") as HTMLInputElement
    ).value;
    RegistrationData.password = (
      document.getElementById("password") as HTMLInputElement
    ).value;
    RegistrationData.passwordConfirmation = (
      document.getElementById("passwordConfirmation") as HTMLInputElement
    ).value;
    callbackFunction();
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
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitData}
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
        <ErrorList errorDetail={errorProp}></ErrorList>
      </Container>
    </>
  );
};

export default RegisterForm;
