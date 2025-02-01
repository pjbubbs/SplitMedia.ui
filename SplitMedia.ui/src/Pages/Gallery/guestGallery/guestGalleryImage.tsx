import "./guestGalleryImage.css";

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const GuestGalleryImage = (props: { vImage: IViewGalleryImage }) => (
  <>
    <table>
      <tr>
        <td>
          <ul>
            <li>{props.vImage?.originalName}</li>
            <li>{props.vImage?.contentType}</li>
            <li>{props.vImage?.sizeInBytes}</li>
            <li>{formatDate(props.vImage?.created)}</li>
          </ul>
        </td>
        <td>
          <img src={props.vImage?.url} className="galleryImageThumbnail" />
        </td>
      </tr>
    </table>
    <hr></hr>
  </>
);

export default GuestGalleryImage;
