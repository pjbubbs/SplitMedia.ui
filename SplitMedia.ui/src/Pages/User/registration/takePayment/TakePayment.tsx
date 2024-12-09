import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";
import TakePaymentForm from "./TakePaymentForm";

export default function TakePayment() {
  const [takePaymentFormData, setTakePaymentFormData] =
    useState<ITakePaymentData | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  async function fetchData() {
    const selectedPlanId = searchParams.get("mp");
    const payIntervalSelected = searchParams.get("pay");

    if (!selectedPlanId) {
      navigate("/select-plan");
    }

    console.log("/GetMemberPlan?id=" + selectedPlanId);

    await axiosInstance
      .get("/GetMemberPlan?id=" + selectedPlanId)
      .then((response) => {
        const memberPlanData: IMemberPlanData = response.data;

        const formData: ITakePaymentData = {
          planName: memberPlanData.name,
          planCost:
            payIntervalSelected === "monthly"
              ? memberPlanData.monthlyFee
              : memberPlanData.annualFee,
          planPayInterval: payIntervalSelected,
        };

        setTakePaymentFormData(formData);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <>
        {takePaymentFormData ? (
          <TakePaymentForm takePaymentData={takePaymentFormData} />
        ) : null}
      </>
    </>
  );
}
