import { useEffect } from "react";
import SelectPlanForm from "./selectPlanForm";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SelectPlan() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const selectedPlanId = searchParams.get("mp");

    if (selectedPlanId) {
      navigate("/payment?mp=" + selectedPlanId);
    }
  }, []);

  return (
    <>
      <SelectPlanForm /> :
    </>
  );
}
