import { useEffect, useState } from "react";
import MyGalleriesForm from "./myGalleriesForm";
import axiosInstanceSecure from "../../../api/axiosInstanceSecure";
/*import { useNavigate } from "react-router-dom";*/

export default function MyGalleries() {
  const [myGalleriesFormData, setMyGalleriesFormData] = useState<
    IGallery[] | null
  >(null);
  /*const navigate = useNavigate();*/

  async function fetchData() {
    await axiosInstanceSecure
      .get("/GetMyGalleries")
      .then((response) => {
        setMyGalleriesFormData(response.data);
      })
      .catch((error) => {
        console.log("GetMyGalleries - error message: " + error);
        if (error === "authError") {
          /*navigate("/Login");*/
          console.log("Navigate away");
        }
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {myGalleriesFormData ? (
        <MyGalleriesForm galleriesData={myGalleriesFormData} />
      ) : null}
    </>
  );
}
