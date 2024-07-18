import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PageHeader from "../../components/pageHeader";
import { useState } from "react";
import ErrorList, { IErrorDetails } from "../../components/errorList";
import axiosInstanceSecure from "../../api/axiosInstanceSecure";
import { useNavigate } from "react-router-dom";

type CreateGalleryModel = {
  galleryName: string;
  galleryDescription: string;
};

export default function AddGallery() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [galleryId, setGalleryId] = useState("");

  const [error, setError] = useState<IErrorDetails | null>(null);
  const navigate = useNavigate();

  var apiErrorResponse: ApiRegErrorResponse | undefined = undefined;

  const model: CreateGalleryModel = {
    galleryName: name,
    galleryDescription: description,
  };

  const requiredFieldsSupplied = () => {
    if (name && description) {
      return true;
    }

    var errors: string[] = [];

    if (!name) {
      errors.push("Name must be entered.");
    }
    if (!description) {
      errors.push("Description must be entered.");
    }

    const err: IErrorDetails = {
      title: "One or more validation errors occurred.",
      messages: errors,
    };

    setError(err);

    return false;
  };

  const handleCreateGallery = async () => {
    if (!requiredFieldsSupplied()) {
      return;
    }

    try {
      const response = await axiosInstanceSecure
        .post("/addGallery", model)
        .catch(function (error) {
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

      const myData = response.data;

      console.log("data var: " + myData);

      navigate("/gallery", { state: { id: 1, galleryId: myData } });
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
          <Typography variant="h5">Create Gallery</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Gallery Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCreateGallery}
            >
              Create Gallery
            </Button>

            <ErrorList errorDetail={error}></ErrorList>
          </Box>
        </Box>
      </Container>
    </>
  );
}
