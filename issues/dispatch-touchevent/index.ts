export function main(targetElement: HTMLElement) {
  // works fine
  targetElement.addEventListener('touchstart', (event) => {
    console.log(event);
  });

  // does not work
  //   targetElement.ontouchstart = (event) => {
  //     console.log(event);
  //   };
}
