import React, { useEffect } from 'react';
import './StartPage.scss';
import {connect} from 'react-redux';
import { getPhotosAlbum } from '../../store/photoAlbum/actionCreators/photoAlbumActions';

interface StartPageProps {
    onGetPhotosAlbum: () => void;
}

const StartPage = (props: StartPageProps) => {
    useEffect(() => {
        props.onGetPhotosAlbum();
    }, [])
    return(
        <div className="start-page">
            <>Its Start Page</>
        </div>
    )
}

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        onGetPhotosAlbum: () => dispatch(getPhotosAlbum())
    };
};


export default connect(null, mapDispatchToProps)(StartPage);