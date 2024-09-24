const MyGalleriesForm = (props: { galleriesData: any }) => (
  <>
    <h2>My Galleries</h2>

    {props.galleriesData.myGalleries.map((gallery: IGallery) => {
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
