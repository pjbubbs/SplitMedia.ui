import PageHeader from '../../components/pageHeader'
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { useState } from "react";
import ErrorList, { IErrorDetails } from '../../components/errorList';
import axiosInstanceSecure from '../../api/axiosInstanceSecure';

interface ApiCpErrorResponse {
    type: string;
    title: string;
    status: number;
}

type ChangePasswordModel = {
    oldPassword: string;
    newPassword: string;
}

export default function ChangePassword(){

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState<IErrorDetails | null>(null);

  const cpModel: ChangePasswordModel = {
    oldPassword: oldPassword,
    newPassword: newPassword
  };

  var apiErrorResponse: ApiCpErrorResponse | undefined = undefined;

  const handleChangePassword = async () => {
    if (oldPassword && newPassword && passwordConfirmation) {

      await axiosInstanceSecure.post(
            "/Auth",
            cpModel
        ).catch(function (error) {
    
            const jsonString = JSON.stringify(error.response.data);      
            apiErrorResponse = JSON.parse(jsonString);

            if(apiErrorResponse)
            {

            var errors :string[] = [];

/*                for (const errorCode in apiErrorResponse.errors) {
                const errorDetails = apiErrorResponse.errors[errorCode];
                errorDetails.forEach(detail => errors.push(String(detail)));
            }      
*/ 
            const err: IErrorDetails = {
                title: apiErrorResponse.title,
                messages: errors
            };

            setIsDisabled(true);

            setError(err);
            }; 
        });        
    } else {
      var errors :string[] = [];

      if (!oldPassword) { errors.push("Old Password must be entered.")}
      if (!newPassword) { errors.push("New Password must be entered.")}
      if (!passwordConfirmation) { errors.push("Password Confirmation must be entered.")}

      const err: IErrorDetails = {
        title: 'One or more validation errors occurred.',
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
          <Typography variant="h5">Change Password</Typography>
          <Box sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              disabled={isDisabled}
              fullWidth
              id="oldPassword"
              name="oldPassword"
              label="Old Password"
              type="password"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              disabled={isDisabled}
              fullWidth
              id="newPassword"
              name="newPassword"
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              disabled={isDisabled}
              fullWidth
              id="passwordConfirmation"
              name="passwordConfirmation"
              label="Password Confirmation"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleChangePassword}
            >
              Change Password
            </Button>

          </Box>
        </Box>
        <ErrorList errorDetail={error}></ErrorList>
      </Container>
    </>
  );
};


