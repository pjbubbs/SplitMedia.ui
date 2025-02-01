import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import ViewGuestGalleryForm from "./viewGuestGalleryForm";

export default function ViewGuestGallery() {
  const { gid, sid } = useParams();
  const [myGalleryFormData, setMyGalleryFormData] =
    useState<IGalleryAndContent | null>(null);
  const navigate = useNavigate();

  async function fetchData() {
    await axiosInstance
      .get("/GetGuestGalleryAndContent?gid=" + gid + "&sid=" + sid)
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
      {myGalleryFormData ? (
        <ViewGuestGalleryForm galleryAndContent={myGalleryFormData} />
      ) : null}
    </>
  );
}
