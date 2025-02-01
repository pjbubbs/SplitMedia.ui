import { useEffect, useState } from "react";
import axiosInstanceSecure from "../../../api/axiosInstanceSecure";
import DashboardForm from "./dashboardForm";

export default function DashBoard() {
  const [myDashBoardFormData, setMyDashBoardFormData] =
    useState<IDashBoard | null>(null);

  async function fetchData() {
    await axiosInstanceSecure
      .get("/GetMyDashBoard")
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setMyDashBoardFormData(response.data);
      })
      .catch((error) => {
        console.log("GetMyDashBoard - error message: " + error);
        if (error === "authError") {
          /*navigate("/Login");*/
          console.log("Navigate away");
        }
      });
  }

  useEffect(() => {
    console.log("use effect running");
    fetchData();
  }, []);

  return (
    <>
      {myDashBoardFormData ? (
        <DashboardForm dashBoardData={myDashBoardFormData} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
