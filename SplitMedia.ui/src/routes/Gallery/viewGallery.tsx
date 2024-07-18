import { useLocation } from "react-router-dom";
import PageHeader from "../../components/pageHeader";

export default function ViewGallery() {
  const location = useLocation();

  console.log("State!");
  console.log(location.state);

  return (
    <>
      <PageHeader />
      <h1>Gallery: {location.state.galleryId}</h1>
    </>
  );
}
