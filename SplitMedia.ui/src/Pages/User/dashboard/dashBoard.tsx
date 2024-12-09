import PageHeader from "../../../components/pageHeader";
import PageFooter from "../../../components/pageFooter";
import MyGalleries from "../../Gallery/myGalleries/myGalleries";

export default function DashBoard() {
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
