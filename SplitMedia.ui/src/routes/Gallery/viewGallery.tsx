import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader";
import { Button } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import ImageUpload from "../../components/Uploaders/imageUploader";

const GET_DATA = gql`
  query Get($id: UUID!) {
    galleryAndContent(galleryId: $id) {
      createdAt
      galleryDescription
      galleryId
      galleryName
    }
  }
`;

export default function ViewGallery() {
  const { id } = useParams();

  console.log(id);

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <PageHeader />
      <h1>
        Gallery:
        {data.galleryAndContent.galleryName}
      </h1>

      <ImageUpload />
    </>
  );
}
