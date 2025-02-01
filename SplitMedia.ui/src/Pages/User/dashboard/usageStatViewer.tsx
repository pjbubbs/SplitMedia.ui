const UsageStatViewer = (props: { stat: IUsageStat }) => (
  <div className="sm-3 border rounded">
    <ul>
      <li>{props.stat?.statName}</li>
      <li>Limit: {props.stat?.limit}</li>
      <li>Used: {props.stat?.used}</li>
    </ul>
  </div>
);

export default UsageStatViewer;
