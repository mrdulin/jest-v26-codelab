import React, { useEffect, useRef } from 'react';

export type FileInputProps = {
  fileList: File[];
};
const FileInput = ({ fileList = [] }: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const dataTransfer = new DataTransfer();
      fileList.forEach((file) => dataTransfer.items.add(file));
      inputRef.current.files = dataTransfer.files;
    }
  }, [fileList]);

  return <input type="file" ref={inputRef} data-testid='uploader' />;
};

export default FileInput;
