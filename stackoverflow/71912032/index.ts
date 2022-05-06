export function main() {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'abc') {
      console.log(event.data.payload);
    }
  });
}
