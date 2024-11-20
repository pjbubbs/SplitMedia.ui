const MemberPlanForm = (props: { memberPlanData: IMemberPlanData }) => (
  <div className="col-sm-2">
    <div className="rootPlanBox">
      <div className="planBoxTitle">{props.memberPlanData.name}</div>
      <ul>
        <li>Max Files: {props.memberPlanData.maxFileCount}</li>
        <li>Max Videos: {props.memberPlanData.maxVideoCount}</li>
        <li>Max Photos: {props.memberPlanData.maxStillCount}</li>
        <li>Max Disk GB: {props.memberPlanData.maxDiskUsageGB}</li>
        <li>Monthly Fee: £{props.memberPlanData.monthlyFee}</li>
        <li>Annual Fee: £{props.memberPlanData.annualFee}</li>
      </ul>
    </div>
  </div>
);

export default MemberPlanForm;
