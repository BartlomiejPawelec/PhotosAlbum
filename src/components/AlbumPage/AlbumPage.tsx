import React from 'react';
import './AlbumPage.scss';
import firebaseApp from '../firebase/config/firebase.config';

const AlbumPage = () => {
    return(
        <div className="album-page">
            <button onClick={() => {firebaseApp.auth().signOut().then(() => alert('Wylogowano'))}}>Logout</button>
            Welcome to Album page
        </div>
    )
}

export default AlbumPage;
