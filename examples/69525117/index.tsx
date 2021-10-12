import React from 'react';
import { connect } from 'react-redux';
import { open as openModal } from './actions';
import ContentAddToAlbumModal from './components/ContentAddToAlbumModal';
import AddSection from './components/AddSection';
const MODAL_CONTENT_ADD_TO_ALBUM = 'MODAL_CONTENT_ADD_TO_ALBUM';

export function AddToAlbumButton(props) {
  return (
    <>
      <AddSection onClick={props.openUploadModal} />
      <ContentAddToAlbumModal />
    </>
  );
}

function mapDispatchToProps(dispatch, props) {
  return {
    openUploadModal() {
      return dispatch(openModal(MODAL_CONTENT_ADD_TO_ALBUM, props.content.get('id')));
    },
  };
}

export default connect(null, mapDispatchToProps)(AddToAlbumButton);
