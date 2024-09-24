import { useRecoilState } from "recoil";
import { selectedGalleryIdState } from "../../../atoms";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import * as Query from "./myGalleriesQuery";
import MyGalleriesForm from "./myGalleriesForm";

export default function MyGalleries() {
  const { data } = useQuery(Query.GalleryQuery);
  const [galleryId, setGalleryId] = useRecoilState(selectedGalleryIdState);

  useEffect(() => {
    setGalleryId(galleryId);
  }, []);

  return <>{data ? <MyGalleriesForm galleriesData={data} /> : null}</>;
}
