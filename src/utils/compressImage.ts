import { ImageLoader } from 'next/image';

export function compressImage(baseURL: any) {
  const imageElement = document.createElement('img');
  imageElement.src = baseURL;
  let result;
  imageElement.onload = function (e: any) {
    const canvas = document.createElement('canvas');
    const MAX_WIDTH = 1000;
    const scaleSize = MAX_WIDTH / e.target?.width;
    canvas.width = MAX_WIDTH;
    canvas.height = scaleSize * e.target?.height;
    const ctx = canvas.getContext('2d');

    ctx?.drawImage(e.target, 0, 0, canvas.width, canvas.height);

    const rs = ctx?.canvas.toDataURL(e.target);
    result = rs;
    console.log(result);
  };
  console.log(result);
}
