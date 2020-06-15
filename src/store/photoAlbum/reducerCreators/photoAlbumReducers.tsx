import {
  PhotoAlbumState,
  PhotoAlbumStartAction,
  PhotoAlbumSuccessAction,
  PhotoAlbumFailAction,
  PhotoAlbumActionTypes,
} from "../types";
import * as actionTypes from "../../actionTypes";

const initialState: PhotoAlbumState = {
  error: null,
  loading: true,
  album: [],
};

const photoAlbumStart = (
  state: PhotoAlbumState,
  action: PhotoAlbumStartAction
): PhotoAlbumState => {
  return {
    ...state,
    album: [],
    error: null,
    loading: true,
  };
};

const photoAlbumSuccess = (state: PhotoAlbumState, action: PhotoAlbumSuccessAction): PhotoAlbumState => {
  return {
    ...state,
    album: action.album,
    loading: false,
  };
};

const photoAlbumFail = (
  state: PhotoAlbumState,
  action: PhotoAlbumFailAction
): PhotoAlbumState => {
  return {
    ...state,
    album: [],
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action: PhotoAlbumActionTypes): PhotoAlbumState => {
  switch (action.type) {
    case actionTypes.PHOTO_ALBUM_START:
      return photoAlbumStart(state, action);
    case actionTypes.PHOTO_ALBUM_FAIL:
      return photoAlbumFail(state, action);
    case actionTypes.PHOTO_ALBUM_SUCCESS:
      return photoAlbumSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
