import { atom } from "recoil";

export const selectedGalleryIdState = atom({
  key: "selectedGalleryId",
  default: "",
});

export const authErrorState = atom({
  key: "authError",
  default: false,
});
