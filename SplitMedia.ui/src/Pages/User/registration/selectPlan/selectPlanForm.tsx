import PageFooter from "../../../../components/pageFooter";
import PageHeader from "../../../../components/pageHeader";
import PlanForm from "./PlanForm";

const SelectPlanForm = (props: { planData: IPlanData[] }) => (
  <>
    <PageHeader />
    <p>Please select the plan that you'd like to use:</p>

    <section id="StorageSpec">
      <div className="techSectionHeader text-start">Membership Plans</div>
      <div className="row">
        <div className="col-sm-1">&nbsp;</div>
        {props.planData
          ? props.planData.map((memberPlan) => (
              <PlanForm key={memberPlan.memberPlanId} planData={memberPlan} />
            ))
          : null}
      </div>
    </section>
    <PageFooter />
  </>
);

export default SelectPlanForm;
