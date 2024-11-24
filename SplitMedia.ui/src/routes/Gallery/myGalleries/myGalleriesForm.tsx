const MyGalleriesForm = (props: { galleriesData: IGallery[] }) => (
  <>
    <h2>My Galleries</h2>

    {props.galleriesData.map((gallery: IGallery) => {
      return (
        <div key={gallery.galleryId}>
          <a className="" href={"/gallery/" + gallery.galleryId}>
            {gallery.galleryName}
          </a>
        </div>
      );
    })}
  </>
);

export default MyGalleriesForm;
