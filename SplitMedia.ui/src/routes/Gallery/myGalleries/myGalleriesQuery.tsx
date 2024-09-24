import { DocumentNode, gql } from "@apollo/client";

export const GalleryQuery: DocumentNode = gql`
  query {
    myGalleries {
      galleryName
      galleryId
    }
  }
`;
