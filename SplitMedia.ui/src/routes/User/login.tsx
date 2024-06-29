import PageHeader from '../../components/pageHeader'
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorList, { IErrorDetails } from '../../components/errorList';
import axiosInstance from '../../api/axiosInstance';
import { useCookies } from 'react-cookie';
import { AxiosError } from 'axios';


export default function Login(){

  const [,setCookie] = useCookies(['refreshToken']);
  const [,setAccessCookie] = useCookies(['accessToken']);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IErrorDetails | null>(null);

  const navigate = useNavigate();

  type User = {
    email: string;
    password: string;
  };
  
  type AuthToken = {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
  }
  
  const handleLogin = async () => {
    if (!email || !password) {
      var errors :string[] = [];

      if (!email) { errors.push("Email must be entered.")}
      if (!password) { errors.push("Password must be entered.")}

      const err: IErrorDetails = {
        title: 'One or more validation errors occurred.',
        messages: errors
      };

      setError(err);
      
      return;
    }

      try {

        const data: User = {
          email: email,
          password: password};
        
        const response = await axiosInstance.post("/login", data);
        const authData: AuthToken = response.data;
      
        setCookie('refreshToken', authData.refreshToken);
        setAccessCookie('accessToken', authData.accessToken);

        navigate("/");

      } catch (e) {
        var errors :string[] = [];
        
        let message
        if (e instanceof AxiosError) {
          if( e.response?.status==401)
          {
            message ='Invalid Credentials';
          }
          else{
            message =e.message;
          }
        }
        else message = String(error)

        errors.push(message);

        const err: IErrorDetails = {
          title: 'The following error occurred',
          messages: errors
        };
  
        setError(err);
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
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to="/register">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ErrorList errorDetail={error}></ErrorList>
      </Container>
    </>
  );
};


