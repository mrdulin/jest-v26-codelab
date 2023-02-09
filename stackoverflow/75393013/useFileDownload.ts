import { useRef, useState } from 'react';

export const useFileDownload = ({ apiResponse, fileName }) => {
  const ref = useRef<HTMLElement>(null);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  const download = async () => {
    const { data } = await apiResponse();
    const objectUrl = window.URL.createObjectURL(new Blob([data]));

    setUrl(objectUrl);
    setName(fileName);

    ref.current?.click();
    window.URL.revokeObjectURL(objectUrl);
  };

  return { url, ref, name, download };
};
