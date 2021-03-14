export function main() {
  const paypalRef = { current: 'teresa teng' };
  window.paypal.Buttons().render(paypalRef.current);
}
