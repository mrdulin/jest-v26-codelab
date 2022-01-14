export const downloadPdfDataContent = (title: string, url: string): void => {
  const link = document.createElement('a');
  link.target = title;
  link.href = url;
  link.download = title;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
