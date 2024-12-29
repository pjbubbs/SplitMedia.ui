import { useState, useRef } from "react";
import DefaultImage from "../../../assets/upload.png";
//import EditIcon from "../../assets/edit.png";
import "./imageUpload.css";
import UploadingAnimation from "../../../assets/uploading.gif";
import { useParams } from "react-router-dom";

const ImageUpload = () => {
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log("File is set");
      setFile(e.target.files[0]);
    }
  };

  /*
  const handleImageUpload = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("running handleImageUpload");
    event.preventDefault();
    fileUploadRef.current?.click();
    console.log("Done running handleImageUpload");
  };
*/
  const handleImageUpload = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return;
    }
    if (!file) {
      return;
    }
    if (!id) {
      return;
    }

    console.log("running uploadImageDisplay");

    console.log("ID: " + id);
    console.log("token: " + token);

    setAvatarURL(UploadingAnimation);

    const formData = new FormData();
    formData.append("GalleryId", id);
    formData.append("ImageFile", file);

    const result = await fetch("https://localhost:7254/UploadImage", {
      headers: new Headers({ Authorization: "Bearer " + token }),
      method: "POST",
      body: formData,
    });

    console.log("data var: " + result);

    setAvatarURL(DefaultImage);
    //      if (response.status === 201) {
    //        const data = await response.json();
    //        setAvatarURL(data?.location);
    //      }

    console.log("Done running uploadImageDisplay");
  };

  return (
    <div className="relative h-96 w-96 m-8">
      <img src={avatarURL} alt="Avatar" className="uploadImage" />

      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      <input
        type="file"
        id="file"
        ref={fileUploadRef}
        onChange={handleFileChange}
      />

      <button
        type="submit"
        onClick={() => handleImageUpload()}
        className="flex-center absolute bottom-12 right-14 h-2 w-2 rounded-full"
      >
        Submit
        {/*<img src={EditIcon} alt="Edit" className="object-cover" /> */}
      </button>
    </div>
  );
};

export default ImageUpload;
