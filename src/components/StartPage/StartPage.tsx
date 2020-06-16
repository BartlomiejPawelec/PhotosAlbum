import React, { Component } from "react";
import "./StartPage.scss";
import { connect } from "react-redux";
import { getPhotosAlbum } from "../../store/photoAlbum/actionCreators/photoAlbumActions";

interface StartPageProps {
  onGetPhotosAlbum: () => void;
  children?: any;
}

const StartPage = (props: StartPageProps) => {
  return (
    <div className="start-page">
      <h1 className="start-page__header">PhotosAlbum</h1>
      <div className="start-page__form">
        {props.children}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
  return {
    onGetPhotosAlbum: () => dispatch(getPhotosAlbum()),
  };
};

export default connect(null, mapDispatchToProps)(StartPage);
