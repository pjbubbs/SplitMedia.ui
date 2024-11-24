import PageFooter from "../../../../components/pageFooter";
import PageHeader from "../../../../components/pageHeader";

const PaymentForm = (props: { planData: IMemberPlanData }) => (
  <>
    <PageHeader />
    <p>Thanks you for selecting the {props.planData.name} plan</p>

    <section id="StorageSpec">
      <div className="techSectionHeader text-start">{props.planData.name}</div>
      <div className="row">
        <div className="col-sm-3">&nbsp;</div>

        <div className="col-sm-6">
          <div className="rootPlanBox">
            <div className="planBoxTitle">{props.planData.name}</div>
            <ul>
              <li>Max Files: {props.planData.maxFileCount}</li>
              <li>Max Videos: {props.planData.maxVideoCount}</li>
              <li>Max Photos: {props.planData.maxStillCount}</li>
              <li>Max Disk GB: {props.planData.maxDiskUsageGB}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">&nbsp;</div>

        <div className="col-sm-3">
          <div className="rootPlanBox">
            <div className="planBoxTitle">Pay Monthly</div>
            <h2>£{props.planData.monthlyFee}</h2>
            <a
              href={
                "/take-payment?pay=monthly&mp=" + props.planData.memberPlanId
              }
              className="btn btn-primary"
            >
              Select
            </a>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="rootPlanBox">
            <div className="planBoxTitle">Pay Annually</div>
            <h2>£{props.planData.annualFee}</h2>
            <a
              href={
                "/take-payment?pay=annually&mp=" + props.planData.memberPlanId
              }
              className="btn btn-primary"
            >
              Select
            </a>
          </div>
        </div>
      </div>
    </section>

    <PageFooter />
  </>
);

export default PaymentForm;
