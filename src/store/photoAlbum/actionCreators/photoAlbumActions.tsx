import * as actionTypes from "../../actionTypes";
import { PhotoAlbumActionTypes } from "../types";
import axios from "axios";
import Photo from "../../../shared/dataTypes/Photo";

export const photoAlbumStart = (): PhotoAlbumActionTypes => {
  return {
    type: actionTypes.PHOTO_ALBUM_START,
  };
};

export const photoAlbumSuccess = (photoData: Photo[]) => {
  return {
    type: actionTypes.PHOTO_ALBUM_SUCCESS,
    album: photoData,
  };
};

export const photoAlbumFail = (errorMessage: string) => {
  return {
    type: actionTypes.PHOTO_ALBUM_FAIL,
    error: errorMessage,
  };
};

//Functions
export const getPhotosAlbum = () => {
  return (dispatch: (arg0: any) => void) => {
    dispatch(photoAlbumStart());
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        dispatch(photoAlbumSuccess(response.data))
      });
  };
};
