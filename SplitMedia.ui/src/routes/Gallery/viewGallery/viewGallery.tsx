import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstanceSecure from "../../../api/axiosInstanceSecure";
import ViewGalleryForm from "./viewGalleryForm";

export default function ViewGallery() {
  const { id } = useParams();
  const [myGalleryFormData, setMyGalleryFormData] =
    useState<IGalleryAndContent | null>(null);
  const navigate = useNavigate();

  async function fetchData() {
    console.log("/GetGalleryAndContent?GalleryId=" + id);

    await axiosInstanceSecure
      .get("/GetGalleryAndContent?GalleryId=" + id)
      .then((response) => {
        setMyGalleryFormData(response.data);
      })
      .catch((error) => {
        console.log("error message " + error);
        if (error === "authError") {
          navigate("/Login");
        }
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      Here:
      {myGalleryFormData ? (
        <ViewGalleryForm galleryAndContent={myGalleryFormData} />
      ) : null}
    </>
  );
}
