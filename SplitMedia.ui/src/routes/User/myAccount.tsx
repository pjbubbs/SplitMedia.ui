import PageHeader from '../../components/pageHeader'
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import basicUserInfo from '../../commonData/user/basicUserInfo';

export default function MyAccount(){
  const navigate = useNavigate();
  const [userName, setUserName] = useState("")

  useEffect(() => {
    async function getBasicInfo() {
      const userInfo = await basicUserInfo();
      setUserName(userInfo?.name + '');
    }
    getBasicInfo();
  }, [])


  const handleLogout = async () => {
    try {
      document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.removeItem("basicUuserInfo");
      navigate("/");
    } catch (e) {
      console.log("handleLogout ERROR:" + e)
    }
  };

  const handleChangePassword = async () => {
      navigate("/change-password");
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
          <Typography variant="h3">{userName}</Typography>
          <br></br>
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Sign Out</Typography>
          <Box sx={{ mt: 1 }}>
            <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>
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
          <Typography variant="h5">Password</Typography>
          <Box sx={{ mt: 1 }}>
            <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleChangePassword}>
              Change Passord
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};


