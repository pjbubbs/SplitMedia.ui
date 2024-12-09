import PageFooter from "../../../components/pageFooter";
import PageHeader from "../../../components/pageHeader";
import ImageUpload from "../../../components/Uploaders/imageUploader";

export default function ViewGalleryForm(props: {
  galleryAndContent: IGalleryAndContent;
}) {
  return (
    <>
      <PageHeader />
      <h1>
        Gallery:
        {props.galleryAndContent?.galleryName}
      </h1>

      <ImageUpload />
      <br></br>
      <PageFooter />
    </>
  );
}
