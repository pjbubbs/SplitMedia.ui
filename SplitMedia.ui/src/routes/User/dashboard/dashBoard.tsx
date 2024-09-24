import { useQuery, gql } from "@apollo/client";
import PageHeader from "../../../components/pageHeader";
import MyGalleries from "../../Gallery/myGalleries/myGalleries";
import { useEffect } from "react";
import PageFooter from "../../../components/pageFooter";

const GET_DATA = gql`
  query {
    myGalleries {
      galleryName
      galleryId
    }
  }
`;

export default function DashBoard() {
  const { loading, error, data } = useQuery(GET_DATA);

  useEffect(() => {
    console.log(loading, error, data);
  });

  return (
    <>
      <PageHeader />
      <h1>User Dashboard</h1>
      <hr></hr>
      <MyGalleries />
      <hr></hr>
      <a className="btn btn-primary" href="/add-gallery">
        Add Gallery
      </a>
      <PageFooter></PageFooter>
    </>
  );
}
