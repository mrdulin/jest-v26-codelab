export default function main() {
  const createAndAppendPTag = () => {
    const p = document.createElement('p');
    document.body.appendChild(p);
  };

  window.document.addEventListener('click', () => {
    createAndAppendPTag();
  });
}
