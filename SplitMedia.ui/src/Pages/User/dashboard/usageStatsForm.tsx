import { Chart } from "react-google-charts";

export const options = {
  width: 400,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
};

const UsageStatsForm = (props: { usageStatsData: IUsageStat[] }) => (
  <>
    <h2>My Usage Stats</h2>

    {props.usageStatsData.map((usageStat: IUsageStat, index) => {
      return (
        <div key={index}>
          <h2>{usageStat?.statName}</h2>
          <table>
            <tr>
              <td>
                <ul>
                  <li>Max: {usageStat?.displayLimit}</li>
                  <li>Used: {usageStat?.displayUsed}</li>
                  <li>{usageStat?.usedPercentage}%</li>
                </ul>
              </td>
              <td>
                <Chart
                  chartType="Gauge"
                  data={[
                    ["Label", "Value"],
                    [
                      usageStat?.abbreviatedName + "%",
                      usageStat?.usedPercentage,
                    ],
                  ]}
                  options={{
                    title: "Average Weight by Age",
                  }}
                  legendToggle
                />
              </td>
            </tr>
          </table>
          <hr></hr>
        </div>
      );
    })}
  </>
);

export default UsageStatsForm;
