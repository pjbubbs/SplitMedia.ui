import RootForm from "./rootForm";
import axiosInstance from "../../api/axiosInstance";
import { useEffect, useState } from "react";

export default function Root() {
  const [rootFormData, setRootFormData] = useState<IRootData | null>(null);

  async function fetchData() {
    await axiosInstance
      .get("/HomePage")
      .then((response) => {
        setRootFormData(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <>{rootFormData ? <RootForm rootData={rootFormData} /> : null}</>;
}
