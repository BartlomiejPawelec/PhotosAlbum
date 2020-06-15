import React from "react";
import "./StartPage.scss";
import { connect } from "react-redux";
import { getPhotosAlbum } from "../../store/photoAlbum/actionCreators/photoAlbumActions";

interface StartPageProps {
  onGetPhotosAlbum: () => void;
}

const StartPage = (props: StartPageProps) => {
  return (
    <div className="start-page">
      <h1 className="start-page__header">
        PhotosAlbum<span>App</span>
      </h1>
      <button className="start-page__button">Check Album</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
  return {
    onGetPhotosAlbum: () => dispatch(getPhotosAlbum()),
  };
};

export default connect(null, mapDispatchToProps)(StartPage);
