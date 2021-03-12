import axios from 'axios';

const url = 'http://localhost:3000/api';

export const downloadAttachment = ({ attachmentId, id, oId }) => {
  return axios.get(`${url}/attachments/file/${attachmentId}/v1`, {
    responseType: 'blob',
    transformResponse: [(data) => ({ file: data })],
  });
};
