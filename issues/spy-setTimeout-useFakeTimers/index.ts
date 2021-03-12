export function main() {
  const timer = setTimeout(() => {
    console.log('teresa teng');
    clearTimeout(timer);
  }, 100);
}
