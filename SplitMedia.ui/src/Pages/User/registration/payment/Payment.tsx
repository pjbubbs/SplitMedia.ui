import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";
import PaymentForm from "./paymentForm";

export default function Payment() {
  const [planFormData, setPlanFormData] = useState<IMemberPlanData | null>(
    null
  );
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  async function fetchData() {
    const selectedPlanId = searchParams.get("mp");

    if (!selectedPlanId) {
      navigate("/select-plan");
    }

    await axiosInstance
      .get("/GetMemberPlan?id=" + selectedPlanId)
      .then((response) => {
        setPlanFormData(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const selectedPlanId = searchParams.get("mp");

    console.log("everywhere");
    if (selectedPlanId) {
      navigate("/payment?mp=" + selectedPlanId);
    }
    fetchData();
  }, []);

  return (
    <>
      <>{planFormData ? <PaymentForm planData={planFormData} /> : null}</>
    </>
  );
}
