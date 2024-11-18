import { useRecoilState } from "recoil";
import { selectedGalleryIdState } from "../../../atoms";
import { DocumentNode, gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import MyGalleriesForm from "./myGalleriesForm";

export default function MyGalleries() {
  const GalleryQuery2: DocumentNode = gql`
    query {
      myGalleries {
        galleryName
        galleryId
      }
    }
  `;

  const { data } = useQuery(GalleryQuery2);
  const [galleryId, setGalleryId] = useRecoilState(selectedGalleryIdState);

  useEffect(() => {
    setGalleryId(galleryId);
  }, []);

  return <>{data ? <MyGalleriesForm galleriesData={data} /> : null}</>;
}
