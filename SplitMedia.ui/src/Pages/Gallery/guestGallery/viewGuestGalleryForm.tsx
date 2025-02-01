import PageFooter from "../../../components/pageFooter";
import PageHeader from "../../../components/pageHeader";
import GalleryImage from "./guestGalleryImage";

export default function ViewGuestGalleryForm(props: {
  galleryAndContent: IGuestGalleryAndContent;
}) {
  return (
    <>
      <PageHeader />
      <h1>
        Guest Gallery:
        {props.galleryAndContent?.galleryName}
      </h1>
      {props.galleryAndContent &&
        props.galleryAndContent.images &&
        props.galleryAndContent.images.map((image: IViewGalleryImage) => {
          return <GalleryImage key={image?.imageId} vImage={image} />;
        })}
      <br></br>
      <PageFooter />
    </>
  );
}
