import PageHeader from "../../../components/pageHeader";
import MyGalleries from "../../Gallery/myGalleries/myGalleries";
import PageFooter from "../../../components/pageFooter";

export default function DashboardPage() {
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
