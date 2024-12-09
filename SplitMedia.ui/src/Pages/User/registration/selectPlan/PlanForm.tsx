const PlanForm = (props: { planData: IPlanData }) => (
  <div className="col-sm-2">
    <div className="rootPlanBox">
      <div className="planBoxTitle">{props.planData.name}</div>
      <ul>
        <li>Max Files: {props.planData.maxFileCount}</li>
        <li>Max Videos: {props.planData.maxVideoCount}</li>
        <li>Max Photos: {props.planData.maxStillCount}</li>
        <li>Max Disk GB: {props.planData.maxDiskUsageGB}</li>
        <li>Monthly Fee: £{props.planData.monthlyFee}</li>
        <li>Annual Fee: £{props.planData.annualFee}</li>
      </ul>
      <a
        href={"/payment?mp=" + props.planData.memberPlanId}
        className="btn btn-primary"
      >
        Select
      </a>
    </div>
  </div>
);

export default PlanForm;
