import { useEffect, useState } from "react";
import PageFooter from "../../components/pageFooter";
import PageHeader from "../../components/pageHeader";
import axiosInstance from "../../api/axiosInstance";
import MemberPlanForm from "../../components/memberPlan/memberPlanForm";

export default function Pricing() {
  const [memberPlanData, setRootFormData] = useState<IMemberPlanData[] | null>(
    null
  );

  async function fetchData() {
    await axiosInstance
      .get("/GetMemberPlans")
      .then((response) => {
        setRootFormData(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageHeader />
      <h1>Pricing</h1>
      <p>
        Phase 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna
        felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat
        mauris fringilla at. Morbi luctus molestie neque in porta.
      </p>
      <div className="row">
        <div className="col-sm-1">&nbsp;</div>

        {memberPlanData
          ? memberPlanData.map((memberPlan) => (
              <MemberPlanForm
                key={memberPlan.memberPlanId}
                memberPlanData={memberPlan}
              />
            ))
          : null}
      </div>
      <p>
        Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna
        felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat
        mauris fringilla at. Morbi luctus molestie neque in porta.
      </p>
      <p>
        Phase 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna
        felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat
        mauris fringilla at. Morbi luctus molestie neque in porta.
      </p>
      <a href="/register" className="btn btn-primary">
        Sign Up
      </a>
      <PageFooter></PageFooter>
    </>
  );
}
