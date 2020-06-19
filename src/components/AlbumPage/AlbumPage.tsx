import React, { useContext, useState } from "react";
import "./AlbumPage.scss";
import firebaseApp from "../firebase/config/firebase.config";
import { AuthContext } from "../../Auth/Auth";
import Loading from "../Loading/Loading";
import fire from "../firebase/config/firebase.config";

const AlbumPage = () => {
  let [upload, setUpload] = useState({
    loading: false as Boolean,
    file: null as any,
    images: [] as any,
  });

  const { currentUser } = useContext(AuthContext);

  const onFileChange = (e: any) =>
    setUpload({
      ...upload,
      file: e.target.files[0],
    });

  const onFileUpload = () => {
    let storageRef = firebaseApp
      .storage()
      .ref(`images/${currentUser.email}/${upload.file.name}`);
    let uploadImage = storageRef.put(upload.file);

    uploadImage.on(
      "state_changed",
      (snapshot: any) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        alert(`upload is ${progress} done`);
      },
      (error) => {
        alert("something go wrong: " + error);
      },
      () => {
        alert("uploaded!");
      }
    );
  };

  const getPhoto = () => {
    firebaseApp
      .storage()
      .ref(`images/${currentUser.email}`)
      .listAll()
      .then((res) => {
        for (let i in res.items) {
          firebaseApp
            .storage()
            .ref()
            .child(`images/${currentUser.email}/${res.items[i].name}`)
            .getDownloadURL()
            .then((res) => {
              setUpload({
                  ...upload,
                  images: [...upload.images, res]
              })
            });
        }
      });
  };

  return (
    <div className="album-page">
      Choose your image to upload:{" "}
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        onChange={(e) => onFileChange(e)}
      />
      <button
        onClick={() => {
          onFileUpload();
        }}
        disabled={!upload.file}
      >
        Upload
      </button>
      <button onClick={() => getPhoto()}>Show</button>
      <button
        onClick={() => {
          firebaseApp
            .auth()
            .signOut()
            .then(() => alert("Wylogowano"));
        }}
      >
        Logout
      </button>
      {upload.loading && <Loading />}
      Welcome to Album page
      {upload.images.map((el:any) => {
          return <img src={`${el}`} width="1280" height="720"/>
      })}
    </div>
  );
};

export default AlbumPage;
