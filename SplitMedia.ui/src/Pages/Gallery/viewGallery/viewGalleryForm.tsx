import PageFooter from "../../../components/pageFooter";
import PageHeader from "../../../components/pageHeader";
import ImageUpload from "../../../components/Uploaders/imageUploader/imageUploader";
import GalleryImage from "./galleryImage";

export default function ViewGalleryForm(props: {
  galleryAndContent: IGalleryAndContent;
  handleClick: (styleSheet: string) => void;
}) {
  return (
    <>
      <PageHeader />
      <h1>
        Gallery:
        {props.galleryAndContent?.galleryName}
      </h1>
      <p>
        <a
          target="blank"
          href={props.galleryAndContent?.shareLink}
          className="bg-colour"
        >
          Share Link
        </a>
      </p>
      <button
        onClick={() =>
          props.handleClick(
            "https://pazootstorage.blob.core.windows.net/pazoot-resources/tmp1.css"
          )
        }
      >
        type A
      </button>
      <button
        onClick={() =>
          props.handleClick(
            "https://pazootstorage.blob.core.windows.net/pazoot-resources/tmp2.css"
          )
        }
      >
        type B
      </button>

      {props.galleryAndContent &&
        props.galleryAndContent.images &&
        props.galleryAndContent.images.map((image: IViewGalleryImage) => {
          return <GalleryImage key={image?.imageId} vImage={image} />;
        })}
      <ImageUpload />
      <br></br>
      <PageFooter />
    </>
  );
}
