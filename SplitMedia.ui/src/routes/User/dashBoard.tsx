import PageHeader from "../../components/pageHeader";
import MyGalleries from "../Gallery/myGalleries";

export default function DashBoard() {
  return (
    <>
      <PageHeader />
      <h1>User Dashboard</h1>
      <MyGalleries />
      <a href="/add-gallery">Add Gallery</a>
    </>
  );
}
