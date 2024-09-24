import { useState, useRef } from "react";
import DefaultImage from "../../assets/upload.png";
import EditIcon from "../../assets/edit.png";
import UploadingAnimation from "../../assets/uploading.gif";
import axiosInstanceSecure from "../../api/axiosInstanceSecure";

type UploadFileModel = {
  GalleryId: string;
  ImageFile: Blob;
};

const ImageUpload = () => {
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    fileUploadRef.current?.click();
  };

  const uploadImageDisplay = async () => {
    try {
      if (!fileUploadRef.current?.files) return;

      setAvatarURL(UploadingAnimation);

      const uploadedFile = fileUploadRef.current.files[0];

      const model: UploadFileModel = {
        GalleryId: "name",
        ImageFile: uploadedFile,
      };

      const response = await axiosInstanceSecure.post("/addGallery", model);

      const myData: string = response.data;
      console.log("data var: " + myData);

      //      if (response.status === 201) {
      //        const data = await response.json();
      //        setAvatarURL(data?.location);
      //      }
    } catch (error) {
      console.error(error);
      setAvatarURL(DefaultImage);
    }
  };

  return (
    <div className="relative h-96 w-96 m-8">
      <img src={avatarURL} alt="Avatar" className="h-96 w-96 rounded-full" />

      <form id="form" encType="multipart/form-data">
        <button
          type="submit"
          onClick={(event) => handleImageUpload(event)}
          className="flex-center absolute bottom-12 right-14 h-9 w-9 rounded-full"
        >
          <img src={EditIcon} alt="Edit" className="object-cover" />
        </button>
        <input
          type="file"
          id="file"
          ref={fileUploadRef}
          onChange={uploadImageDisplay}
          hidden
        />
      </form>
    </div>
  );
};

export default ImageUpload;
