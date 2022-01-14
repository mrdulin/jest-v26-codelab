import React from 'react';
import { useRef, useState, useEffect, MouseEvent } from 'react';

const useAudio = (url: string) => {
  const audio = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio(url) : undefined);
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.current?.play() : audio.current?.pause();
  }, [playing]);

  useEffect(() => {
    audio.current?.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.current?.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle] as const;
};

const NFT = ({ baseUri, metaId, url }: { baseUri: string; metaId: string; url: string }) => {
  const [metadata, setMetadata] = useState<{ [key: string]: string } | null>(null);

  const fetchMetadata = async (url: string) => {
    const response = await fetch(url);
    const result = await response.json();

    if (!result) return;

    setMetadata(result);
  };

  var [playing, toggle] = useAudio(url);

  useEffect(() => {
    fetchMetadata(`${baseUri}/${metaId}`);
  }, []);

  if (!metadata) return null;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-3 mb-4">
      <div className="h-96">
        <div className="relative items-center min-h-full">
          <a href="#"></a>
        </div>
        {url && <button onClick={toggle}> {playing ? 'Pause' : 'Play'} </button>}
      </div>
    </div>
  );
};

function test() {
  return [true, () => {}];
}

const [isOk, func] = test();

func();
