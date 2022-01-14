export const hasMinPicDimension = async ({ mimeType, base64, file }) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = `data:${mimeType};base64,${base64}`;
    image.addEventListener('load', () => {
      if (!['image/gif', 'image/jpeg', 'image/png'].includes(mimeType)) {
        return reject(new Error('Image is not a supported type'));
      }

      if (image.height >= 151 && image.width >= 151) {
        return resolve({ mimeType, base64, file });
      }

      return reject(new Error('Image is too small'));
    });

    image.addEventListener('error', () => {
      reject(new Error('File is not an image'));
    });
  });

export async function getBase64(file) {
  console.log('Your getBase64 real implementation');
}
