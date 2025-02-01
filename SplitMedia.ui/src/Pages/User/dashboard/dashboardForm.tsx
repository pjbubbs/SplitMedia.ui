import PageHeader from "../../../components/pageHeader";
import PageFooter from "../../../components/pageFooter";
import MyGalleriesForm from "../../Gallery/myGalleries/myGalleriesForm";
import UsageStatsForm from "./usageStatsForm";

const DashboardForm = (props: { dashBoardData: IDashBoard }) => (
  <>
    <PageHeader />
    <h1>User Dashboard</h1>
    <hr></hr>
    {props.dashBoardData && props.dashBoardData.galleries ? (
      <MyGalleriesForm galleriesData={props.dashBoardData.galleries} />
    ) : null}
    <hr></hr>
    {props.dashBoardData && props.dashBoardData.usageStats ? (
      <UsageStatsForm usageStatsData={props.dashBoardData.usageStats} />
    ) : null}

    <a className="btn btn-primary" href="/add-gallery">
      Add Gallery
    </a>
    <PageFooter></PageFooter>
  </>
);

export default DashboardForm;
