import React, { useState } from 'react';
import { getBase64, hasMinPicDimension } from './helpers';

export function UploadImageModal() {
  const [error, setError] = useState('');
  const [picFile, setPicFile] = useState();

  const onChange = async () => {
    try {
      const file = document.querySelector('#upload-profile-img-dialog').files[0];
      if (file) {
        const fileData = {
          mimeType: file.type,
          base64: await getBase64(file),
          file,
        };

        await hasMinPicDimension(fileData);
        setPicFile(fileData);
      }
    } catch (error_) {
      setError(error_.message);
    }
  };

  if (error) return <p>{error}</p>;

  // I use console.log to simulate using picFile
  console.log('picFile: ', picFile);

  return (
    <input
      id="upload-profile-img-dialog"
      name="profileImage"
      type="file"
      accept="image/gif,image/jpeg,image/png"
      onChange={onChange}
      data-testid="fileinput"
    />
  );
}
