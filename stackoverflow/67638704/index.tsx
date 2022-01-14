import React from 'react';
import downloadFile from './downLoad';
import Link from './Link';

interface Props {
  id: string;
}

export const ParentComp: React.FC<Props> = (props) => {
  return (
    <div className="wrapper">
      <Link onClick={downloadFile(props.id)}>Download</Link>
    </div>
  );
};
