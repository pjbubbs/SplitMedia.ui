import PageHeader from '../../components/pageHeader'
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
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from '../../api/axiosInstance';
import ErrorList, { IErrorDetails } from '../../components/errorList';
import { useNavigate } from "react-router-dom";

interface ErrorDetail {
  message: string;
}

interface ValidationError {
  [key: string]: ErrorDetail[]; // Key is the error code, value is an array of error details
}

interface ApiRegErrorResponse {
  type: string;
  title: string;
  status: number;
  errors: ValidationError;
}

type UserRegistrationModel = {
  email: string;
  password: string;
}

type AuthToken = {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

export default function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<IErrorDetails | null>(null);

    const navigate = useNavigate();

    const regModel: UserRegistrationModel = {
      password: password,
      email: email
    };

    var apiErrorResponse: ApiRegErrorResponse | undefined = undefined;

    const handleRegister = async () => {
      if (email && password) {
        try {
          await axiosInstance.post(
            "/register",
            regModel
          ).catch(function (error) {
      
            const jsonString = JSON.stringify(error.response.data);      
            apiErrorResponse = JSON.parse(jsonString);

            if(apiErrorResponse)
            {

              var errors :string[] = [];

              for (const errorCode in apiErrorResponse.errors) {
                const errorDetails = apiErrorResponse.errors[errorCode];
                errorDetails.forEach(detail => errors.push(String(detail)));
              }      

              const err: IErrorDetails = {
                title: apiErrorResponse.title,
                messages: errors
              };

              setError(err);
              return;
            }

          });

          const response = await axiosInstance.post("/login", regModel);
          const authData: AuthToken = response.data;
      
          localStorage.setItem("accessToken", JSON.stringify(authData.accessToken));
          localStorage.setItem("refreshToken", JSON.stringify(authData.refreshToken));
      
          console.log(JSON.stringify(authData.accessToken));
          console.log(JSON.stringify(authData.refreshToken));
      
          const config = {
            headers: { Authorization: `Bearer ${authData.accessToken}` }
          };
      
          const userResponse = await axiosInstance.get("/GetBasicUser/", config);
          const userData = userResponse.data;
          localStorage.setItem("userInfo", JSON.stringify(userData));

          navigate("/");

        } catch (e) {
          console.error('Error: ' && e);
        }
      } else {
        var errors :string[] = [];

        if (!email) { errors.push("Email must be entered.")}
        if (!password) { errors.push("Password must be entered.")}

        const err: IErrorDetails = {
          title: 'One or more validation errors occurred.',
          messages: errors
        };

        setError(err);
      }
    };
  
    

    return (
      <>
        <PageHeader/>
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
  };


