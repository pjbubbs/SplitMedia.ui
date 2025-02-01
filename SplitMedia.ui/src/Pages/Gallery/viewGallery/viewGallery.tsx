import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstanceSecure from "../../../api/axiosInstanceSecure";
import ViewGalleryForm from "./viewGalleryForm";

export default function ViewGallery() {
  const { id } = useParams();
  const [myGalleryFormData, setMyGalleryFormData] =
    useState<IGalleryAndContent | null>(null);
  const [styleSheet, setStyleSheet] = useState<string>(
    "https://pazootstorage.blob.core.windows.net/pazoot-resources/tmp1.css"
  );

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

  const handleSetSytleSheet = (sheetPath: string) => {
    setStyleSheet(sheetPath);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <link rel="stylesheet" type="text/css" href={styleSheet} />
      {myGalleryFormData ? (
        <ViewGalleryForm
          galleryAndContent={myGalleryFormData}
          handleClick={handleSetSytleSheet}
        />
      ) : null}
    </>
  );
}
