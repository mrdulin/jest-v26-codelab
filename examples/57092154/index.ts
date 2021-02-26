export function funcToTest(imgUrl: string, callback: Function) {
  const img = new Image();
  img.src = imgUrl;

  img.onload = () => {
    callback(true);
  };

  img.onerror = (e) => {
    callback(false);
    console.log(e);
  };
}
