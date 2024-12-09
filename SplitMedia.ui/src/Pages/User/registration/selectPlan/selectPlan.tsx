import { useEffect, useState } from "react";
import SelectPlanForm from "./selectPlanForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";

export default function SelectPlan() {
  const [planFormData, setPlanFormData] = useState<IPlanData[] | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  async function fetchData() {
    await axiosInstance
      .get("/GetMemberPlans")
      .then((response) => {
        setPlanFormData(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const selectedPlanId = searchParams.get("mp");

    if (selectedPlanId && selectedPlanId !== "null") {
      navigate("/payment?mp=" + selectedPlanId);
    }

    fetchData();
  }, []);

  return (
    <>
      <>{planFormData ? <SelectPlanForm planData={planFormData} /> : null}</>;
    </>
  );
}
