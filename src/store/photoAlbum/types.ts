import * as actionTypes from "../actionTypes";
import Photo from "../../shared/dataTypes/Photo";


export interface PhotoAlbumState{
    album?: Photo[];
    error: string | null;
    loading: boolean;
}

export interface PhotoAlbumStartAction{
    type: typeof actionTypes.PHOTO_ALBUM_START;
}

export interface PhotoAlbumSuccessAction{
    type: typeof actionTypes.PHOTO_ALBUM_SUCCESS;
    album: Photo[];
}

export interface PhotoAlbumFailAction{
    type: typeof actionTypes.PHOTO_ALBUM_FAIL;
    error: string;
}

export type PhotoAlbumActionTypes = 
    | PhotoAlbumStartAction
    | PhotoAlbumSuccessAction
    | PhotoAlbumFailAction